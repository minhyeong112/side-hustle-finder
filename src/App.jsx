import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Slider } from '@/components/ui/slider.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, ArrowLeft, RotateCcw, Share2, DollarSign, Clock, Target, Star, TrendingUp, CheckCircle } from 'lucide-react'
import { generateRecommendations } from './recommendationEngine.js'
import { SharingModal } from './SharingModal.jsx'
import './App.css'

function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({
    skills: [],
    interests: '',
    uniqueAssets: '',
    existingDemand: '',
    marketGaps: '',
    timeAvailable: [10],
    incomeTarget: '',
    successDefinition: []
  })
  const [showResults, setShowResults] = useState(false)
  const [recommendations, setRecommendations] = useState([])
  const [selectedRecommendation, setSelectedRecommendation] = useState(null)
  const [showSharingModal, setShowSharingModal] = useState(false)

  const questions = [
    {
      id: 'skills',
      title: 'What specific skills do you enjoy using and feel confident in?',
      description: 'Select all that apply. These are skills you naturally gravitate toward and feel energized using.',
      type: 'checkbox',
      options: [
        'Writing & Content Creation',
        'Coding & Web Development',
        'Teaching & Training',
        'Graphic Design & Visual Arts',
        'Problem-solving & Analysis',
        'Event Planning & Organization',
        'Fixing & Building Things',
        'Listening & Advising Others',
        'Sales & Persuasion',
        'Photography & Videography',
        'Social Media & Marketing',
        'Data Analysis & Research'
      ]
    },
    {
      id: 'interests',
      title: 'What topics, activities, or problems genuinely excite or energize you?',
      description: 'Think beyond hobbies - what subjects make you lose track of time when you\'re learning or talking about them?',
      type: 'textarea',
      placeholder: 'e.g., sustainability, vintage fashion, AI, personal finance, baking, local history, fitness tech...'
    },
    {
      id: 'uniqueAssets',
      title: 'What unique knowledge, experiences, or resources do you have access to?',
      description: 'Consider your professional background, life experiences, network, tools, or specialized knowledge others might value.',
      type: 'textarea',
      placeholder: 'e.g., industry insights, specialized tools, niche network, multilingual ability, professional certifications...'
    },
    {
      id: 'existingDemand',
      title: 'What small tasks do people already ask you for help with?',
      description: 'Think about requests from friends, family, or colleagues - these reveal existing demand for your skills.',
      type: 'textarea',
      placeholder: 'e.g., "Can you fix my resume?", "Help me set up my website", "Organize my closet", "Explain taxes"...'
    },
    {
      id: 'marketGaps',
      title: 'What frustrations or unmet needs do you observe in your community?',
      description: 'Look for problems you notice repeatedly - these could be opportunities for your side hustle.',
      type: 'textarea',
      placeholder: 'e.g., "Local pet owners need reliable walkers", "Busy parents need quick healthy meals", "Small shops need simple social media help"...'
    },
    {
      id: 'timeAvailable',
      title: 'How many hours per week can you consistently dedicate?',
      description: 'Be realistic about your schedule and energy levels. Consistency matters more than total hours.',
      type: 'slider',
      min: 5,
      max: 40,
      step: 5
    },
    {
      id: 'incomeTarget',
      title: 'What is your non-negotiable monthly income target?',
      description: 'Be specific about your financial goal. This helps determine the type and scale of side hustle you need.',
      type: 'number',
      placeholder: 'Enter amount in USD'
    },
    {
      id: 'successDefinition',
      title: 'What does success look like beyond money?',
      description: 'Consider your personal values and long-term vision. Multiple selections are encouraged.',
      type: 'checkbox',
      options: [
        'Build a professional portfolio',
        'Test a business idea',
        'Learn new skills',
        'Flexible schedule',
        'Creative outlet',
        'Industry connections',
        'Personal fulfillment',
        'Help others',
        'Location independence',
        'Passive income potential'
      ]
    }
  ]

  const updateAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }))
  }

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Generate recommendations when questionnaire is complete
      const generatedRecommendations = generateRecommendations(answers)
      setRecommendations(generatedRecommendations)
      setShowResults(true)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const resetQuestionnaire = () => {
    setCurrentStep(0)
    setAnswers({
      skills: [],
      interests: '',
      uniqueAssets: '',
      existingDemand: '',
      marketGaps: '',
      timeAvailable: [10],
      incomeTarget: '',
      successDefinition: []
    })
    setShowResults(false)
    setRecommendations([])
    setSelectedRecommendation(null)
    setShowSharingModal(false)
  }

  const isCurrentStepComplete = () => {
    const currentQuestion = questions[currentStep]
    const currentAnswer = answers[currentQuestion.id]
    
    if (currentQuestion.type === 'checkbox') {
      return currentAnswer && currentAnswer.length > 0
    }
    if (currentQuestion.type === 'slider') {
      return true // Slider always has a value
    }
    return currentAnswer && currentAnswer.toString().trim() !== ''
  }

  if (showResults) {
    if (selectedRecommendation) {
      // Detailed roadmap view
      const rec = selectedRecommendation
      return (
        <div className="min-h-screen bg-background p-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <Button 
                onClick={() => setSelectedRecommendation(null)}
                variant="outline"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Recommendations
              </Button>
            </div>
            
            <Card className="border-2 border-accent/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl font-bold text-primary mb-2">
                      {rec.title}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {rec.description}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-lg px-3 py-1">
                    {rec.score}% Match
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                  <div className="text-center p-3 bg-card rounded-lg border">
                    <Clock className="h-6 w-6 text-accent mx-auto mb-1" />
                    <div className="text-lg font-bold text-primary">{rec.timeToStart}</div>
                    <div className="text-xs text-muted-foreground">Time to Start</div>
                  </div>
                  <div className="text-center p-3 bg-card rounded-lg border">
                    <DollarSign className="h-6 w-6 text-accent mx-auto mb-1" />
                    <div className="text-lg font-bold text-primary">${rec.projectedIncome.monthly}</div>
                    <div className="text-xs text-muted-foreground">Monthly Potential</div>
                  </div>
                  <div className="text-center p-3 bg-card rounded-lg border">
                    <TrendingUp className="h-6 w-6 text-accent mx-auto mb-1" />
                    <div className="text-lg font-bold text-primary">${rec.projectedIncome.hourly}/hr</div>
                    <div className="text-xs text-muted-foreground">Hourly Rate</div>
                  </div>
                  <div className="text-center p-3 bg-card rounded-lg border">
                    <Star className="h-6 w-6 text-accent mx-auto mb-1" />
                    <div className="text-lg font-bold text-primary">{rec.difficulty}</div>
                    <div className="text-xs text-muted-foreground">Difficulty</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Why This Matches You</h3>
                  <ul className="space-y-2">
                    {rec.matchReasons.map((reason, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">{rec.roadmap.overview}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Getting Started</h3>
                  <ol className="space-y-3">
                    {rec.roadmap.gettingStarted.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="bg-accent text-accent-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Required Skills</h3>
                    <ul className="space-y-2">
                      {rec.roadmap.requiredSkills.map((skill, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Tools & Resources</h3>
                    <ul className="space-y-2">
                      {rec.roadmap.toolsResources.map((tool, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Growth Path</h3>
                  <ol className="space-y-3">
                    {rec.roadmap.growthPath.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-lg font-semibold text-primary mb-2">Income Projection</h3>
                  <p className="text-muted-foreground mb-2">{rec.roadmap.incomeProjection}</p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Time Investment:</strong> {rec.roadmap.timeInvestment}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button 
                    onClick={resetQuestionnaire}
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Start Over
                  </Button>
                  <Button 
                    onClick={() => setShowSharingModal(true)}
                    className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    <Share2 className="h-4 w-4" />
                    Share This Roadmap
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    }

    // Main recommendations view
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-6xl mx-auto">
          <Card className="border-2 border-accent/20 mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-primary mb-2">
                Your Personalized Side Hustle Recommendations
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Based on your responses, here are {recommendations.length} tailored opportunities to start earning extra income
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-card rounded-lg border">
                  <Clock className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{answers.timeAvailable[0]} hrs/week</div>
                  <div className="text-sm text-muted-foreground">Available Time</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border">
                  <DollarSign className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">${answers.incomeTarget}/month</div>
                  <div className="text-sm text-muted-foreground">Income Target</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border">
                  <Target className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">${Math.round(answers.incomeTarget / (answers.timeAvailable[0] * 4.33))}/hr</div>
                  <div className="text-sm text-muted-foreground">Required Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {recommendations.length === 0 ? (
            <Card className="border-2 border-accent/20">
              <CardContent className="text-center py-12">
                <div className="text-lg text-muted-foreground mb-4">
                  No perfect matches found for your specific criteria.
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Try adjusting your time availability or income target, or consider developing additional skills.
                </p>
                <Button 
                  onClick={resetQuestionnaire}
                  className="flex items-center gap-2"
                >
                  <RotateCcw className="h-4 w-4" />
                  Retake Questionnaire
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {recommendations.map((rec, index) => (
                <Card key={rec.id} className="border-2 border-accent/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-primary">{rec.title}</h3>
                          <Badge variant="secondary" className="text-sm">
                            {rec.score}% Match
                          </Badge>
                          <Badge variant="outline" className="text-sm">
                            {rec.category}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">{rec.description}</p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div className="text-center p-3 bg-background rounded-lg">
                            <div className="text-lg font-bold text-primary">${rec.projectedIncome.monthly}</div>
                            <div className="text-xs text-muted-foreground">Monthly Potential</div>
                          </div>
                          <div className="text-center p-3 bg-background rounded-lg">
                            <div className="text-lg font-bold text-primary">${rec.projectedIncome.hourly}/hr</div>
                            <div className="text-xs text-muted-foreground">Hourly Rate</div>
                          </div>
                          <div className="text-center p-3 bg-background rounded-lg">
                            <div className="text-lg font-bold text-primary">{rec.timeToStart}</div>
                            <div className="text-xs text-muted-foreground">Time to Start</div>
                          </div>
                          <div className="text-center p-3 bg-background rounded-lg">
                            <div className="text-lg font-bold text-primary">{rec.difficulty}</div>
                            <div className="text-xs text-muted-foreground">Difficulty</div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold text-primary mb-2">Why this matches you:</h4>
                          <ul className="space-y-1">
                            {rec.matchReasons.slice(0, 2).map((reason, reasonIndex) => (
                              <li key={reasonIndex} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{reason}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button 
                        onClick={() => setSelectedRecommendation(rec)}
                        className="flex items-center gap-2"
                      >
                        View Complete Roadmap
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              onClick={resetQuestionnaire}
              variant="outline"
              className="flex items-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Start Over
            </Button>
            <Button 
              onClick={() => setShowSharingModal(true)}
              className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Share2 className="h-4 w-4" />
              Share Results
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (currentStep === 0 && !showResults) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl border-2 border-accent/20">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-primary mb-4">
              Side Hustle Finder
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground mb-6">
              Discover personalized side hustle opportunities that match your skills, interests, and financial goals. 
              Answer 8 essential questions to get AI-powered recommendations with detailed roadmaps.
            </CardDescription>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold text-primary mb-4">What You'll Get:</h3>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  Personalized side hustle recommendations based on your unique profile
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  Step-by-step roadmaps to get started with each opportunity
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  Realistic income projections and time investment estimates
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  Shareable results to discuss with friends and family
                </li>
              </ul>
            </div>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => setCurrentStep(1)} 
              className="w-full text-lg py-6 bg-primary hover:bg-primary/90"
            >
              Start Your Side Hustle Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const currentQuestion = questions[currentStep]
  const progress = ((currentStep + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-primary">Side Hustle Finder</h1>
            <span className="text-sm text-muted-foreground">
              Question {currentStep + 1} of {questions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="border-2 border-accent/20">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">
              {currentQuestion.title}
            </CardTitle>
            <CardDescription className="text-base">
              {currentQuestion.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {currentQuestion.type === 'checkbox' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentQuestion.options.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox
                      id={option}
                      checked={answers[currentQuestion.id].includes(option)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          updateAnswer(currentQuestion.id, [...answers[currentQuestion.id], option])
                        } else {
                          updateAnswer(currentQuestion.id, answers[currentQuestion.id].filter(item => item !== option))
                        }
                      }}
                    />
                    <Label htmlFor={option} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            )}

            {currentQuestion.type === 'textarea' && (
              <Textarea
                placeholder={currentQuestion.placeholder}
                value={answers[currentQuestion.id]}
                onChange={(e) => updateAnswer(currentQuestion.id, e.target.value)}
                className="min-h-[120px]"
              />
            )}

            {currentQuestion.type === 'slider' && (
              <div className="space-y-4">
                <div className="px-3">
                  <Slider
                    value={answers[currentQuestion.id]}
                    onValueChange={(value) => updateAnswer(currentQuestion.id, value)}
                    max={currentQuestion.max}
                    min={currentQuestion.min}
                    step={currentQuestion.step}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{currentQuestion.min} hours</span>
                  <span className="font-semibold text-primary text-lg">
                    {answers[currentQuestion.id][0]} hours per week
                  </span>
                  <span>{currentQuestion.max} hours</span>
                </div>
              </div>
            )}

            {currentQuestion.type === 'number' && (
              <div className="space-y-2">
                <Label htmlFor="income">Monthly Income Target (USD)</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="income"
                    type="number"
                    placeholder={currentQuestion.placeholder}
                    value={answers[currentQuestion.id]}
                    onChange={(e) => updateAnswer(currentQuestion.id, e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            )}

            <div className="flex justify-between pt-6">
              <Button
                onClick={prevStep}
                variant="outline"
                disabled={currentStep === 0}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>
              <Button
                onClick={nextStep}
                disabled={!isCurrentStepComplete()}
                className="flex items-center gap-2 bg-primary hover:bg-primary/90"
              >
                {currentStep === questions.length - 1 ? 'Get My Recommendations' : 'Next'}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Sharing Modal */}
      <SharingModal
        isOpen={showSharingModal}
        onClose={() => setShowSharingModal(false)}
        answers={answers}
        recommendations={recommendations}
        selectedRecommendation={selectedRecommendation}
      />
    </div>
  )
}

export default App

