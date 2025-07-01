// Sharing functionality for Side Hustle Finder results

export function generateShareableContent(answers, recommendations, selectedRecommendation = null) {
  const baseUrl = window.location.origin
  
  if (selectedRecommendation) {
    // Sharing a specific roadmap
    const rec = selectedRecommendation
    return {
      title: `My Side Hustle Roadmap: ${rec.title}`,
      text: `I just discovered my perfect side hustle match! 🎯

${rec.title} - ${rec.score}% Match
${rec.description}

💰 Projected Income: $${rec.projectedIncome.monthly}/month
⏰ Time to Start: ${rec.timeToStart}
📈 Hourly Rate: $${rec.projectedIncome.hourly}/hour

Why it matches me:
${rec.matchReasons.map(reason => `• ${reason}`).join('\n')}

Getting Started:
${rec.roadmap.gettingStarted.map((step, index) => `${index + 1}. ${step}`).join('\n')}

Find your perfect side hustle at ${baseUrl}`,
      
      emailSubject: `My Side Hustle Roadmap: ${rec.title}`,
      emailBody: `Hi there!

I just used the Side Hustle Finder and discovered an amazing opportunity that matches my skills and goals perfectly!

**${rec.title}** - ${rec.score}% Match
${rec.description}

**Key Details:**
• Projected Monthly Income: $${rec.projectedIncome.monthly}
• Hourly Rate: $${rec.projectedIncome.hourly}
• Time to Start: ${rec.timeToStart}
• Difficulty Level: ${rec.difficulty}

**Why This Matches Me:**
${rec.matchReasons.map(reason => `• ${reason}`).join('\n')}

**Getting Started Steps:**
${rec.roadmap.gettingStarted.map((step, index) => `${index + 1}. ${step}`).join('\n')}

**Required Skills:**
${rec.roadmap.requiredSkills.map(skill => `• ${skill}`).join('\n')}

**Tools & Resources Needed:**
${rec.roadmap.toolsResources.map(tool => `• ${tool}`).join('\n')}

**Growth Path:**
${rec.roadmap.growthPath.map((step, index) => `${index + 1}. ${step}`).join('\n')}

**Income Projection:**
${rec.roadmap.incomeProjection}

**Time Investment:**
${rec.roadmap.timeInvestment}

Want to find your perfect side hustle? Check out the Side Hustle Finder: ${baseUrl}

Best regards!`
    }
  } else {
    // Sharing overall results
    const topRec = recommendations[0]
    return {
      title: `My Side Hustle Recommendations`,
      text: `I just found ${recommendations.length} perfect side hustle matches! 🚀

My Profile:
⏰ Available: ${answers.timeAvailable[0]} hours/week
💰 Target: $${answers.incomeTarget}/month

Top Recommendation:
${topRec.title} - ${topRec.score}% Match
💰 $${topRec.projectedIncome.monthly}/month potential

${recommendations.length > 1 ? `Plus ${recommendations.length - 1} more personalized recommendations!` : ''}

Find your perfect side hustle at ${baseUrl}`,

      emailSubject: `My Personalized Side Hustle Recommendations`,
      emailBody: `Hi there!

I just completed the Side Hustle Finder questionnaire and received ${recommendations.length} personalized recommendations that match my skills, interests, and financial goals!

**My Profile:**
• Available Time: ${answers.timeAvailable[0]} hours per week
• Income Target: $${answers.incomeTarget} per month
• Required Hourly Rate: $${Math.round(answers.incomeTarget / (answers.timeAvailable[0] * 4.33))}/hour

**My Skills:** ${answers.skills.join(', ')}

**My Top Recommendations:**

${recommendations.slice(0, 3).map((rec, index) => `
**${index + 1}. ${rec.title}** - ${rec.score}% Match
${rec.description}
• Monthly Potential: $${rec.projectedIncome.monthly}
• Hourly Rate: $${rec.projectedIncome.hourly}
• Time to Start: ${rec.timeToStart}
• Difficulty: ${rec.difficulty}

Why it matches me:
${rec.matchReasons.map(reason => `  • ${reason}`).join('\n')}
`).join('\n')}

${recommendations.length > 3 ? `Plus ${recommendations.length - 3} more personalized recommendations!` : ''}

The questionnaire analyzed my responses across 8 key areas:
• Skills and expertise
• Interests and passions  
• Unique assets and resources
• Existing demand for my help
• Market gaps I've observed
• Available time commitment
• Income requirements
• Definition of success

Want to discover your perfect side hustle? Take the questionnaire at: ${baseUrl}

Best regards!`
    }
  }
}

export function shareViaWebAPI(content) {
  if (navigator.share) {
    return navigator.share({
      title: content.title,
      text: content.text,
      url: window.location.origin
    })
  } else {
    // Fallback: copy to clipboard
    return navigator.clipboard.writeText(content.text).then(() => {
      alert('Content copied to clipboard! You can now paste it anywhere.')
    })
  }
}

export function shareViaEmail(content) {
  const mailtoUrl = `mailto:?subject=${encodeURIComponent(content.emailSubject)}&body=${encodeURIComponent(content.emailBody)}`
  window.open(mailtoUrl, '_blank')
}

export function shareViaSMS(content) {
  const smsUrl = `sms:?body=${encodeURIComponent(content.text)}`
  window.open(smsUrl, '_blank')
}

export function copyToClipboard(content) {
  return navigator.clipboard.writeText(content.text).then(() => {
    return true
  }).catch(() => {
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = content.text
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    return true
  })
}

export function downloadAsText(content, filename = 'my-side-hustle-recommendations.txt') {
  const blob = new Blob([content.emailBody], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

