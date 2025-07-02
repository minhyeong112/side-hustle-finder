import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { 
  Share2, 
  Mail, 
  MessageSquare, 
  Copy, 
  Download, 
  X,
  Check
} from 'lucide-react'
import { 
  generateShareableContent, 
  shareViaWebAPI, 
  shareViaEmail, 
  shareViaSMS, 
  copyToClipboard, 
  downloadAsText 
} from './sharingUtils.js'

export function SharingModal({ 
  isOpen, 
  onClose, 
  answers, 
  recommendations, 
  selectedRecommendation = null 
}) {
  const [copied, setCopied] = useState(false)
  const [sharing, setSharing] = useState(false)

  if (!isOpen) return null

  const content = generateShareableContent(answers, recommendations, selectedRecommendation)

  const handleWebShare = async () => {
    setSharing(true)
    try {
      await shareViaWebAPI(content)
    } catch (error) {
      console.log('Web Share API not supported or cancelled')
    }
    setSharing(false)
  }

  const handleEmailShare = () => {
    shareViaEmail(content)
  }

  const handleSMSShare = () => {
    shareViaSMS(content)
  }

  const handleCopyToClipboard = async () => {
    try {
      await copyToClipboard(content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy to clipboard')
    }
  }

  const handleDownload = () => {
    const filename = selectedRecommendation 
      ? `${selectedRecommendation.title.toLowerCase().replace(/\s+/g, '-')}-roadmap.txt`
      : 'my-side-hustle-recommendations.txt'
    downloadAsText(content, filename)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md border-2 border-accent/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-primary">
                Share Your {selectedRecommendation ? 'Roadmap' : 'Results'}
              </CardTitle>
              <CardDescription>
                Choose how you'd like to share your personalized recommendations
              </CardDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Native Web Share API (if supported) */}
          {navigator.share && (
            <Button
              onClick={handleWebShare}
              disabled={sharing}
              className="w-full flex items-center gap-3 justify-start h-12"
            >
              <Share2 className="h-5 w-5" />
              <div className="text-left">
                <div className="font-medium">Share</div>
                <div className="text-xs opacity-75">Use your device's share menu</div>
              </div>
            </Button>
          )}

          {/* Email Share */}
          <Button
            onClick={handleEmailShare}
            variant="outline"
            className="w-full flex items-center gap-3 justify-start h-12"
          >
            <Mail className="h-5 w-5 text-blue-600" />
            <div className="text-left">
              <div className="font-medium">Email</div>
              <div className="text-xs opacity-75">Send via your email app</div>
            </div>
          </Button>

          {/* SMS Share */}
          <Button
            onClick={handleSMSShare}
            variant="outline"
            className="w-full flex items-center gap-3 justify-start h-12"
          >
            <MessageSquare className="h-5 w-5 text-green-600" />
            <div className="text-left">
              <div className="font-medium">Text Message</div>
              <div className="text-xs opacity-75">Send via SMS</div>
            </div>
          </Button>

          {/* Copy to Clipboard */}
          <Button
            onClick={handleCopyToClipboard}
            variant="outline"
            className="w-full flex items-center gap-3 justify-start h-12"
          >
            {copied ? (
              <Check className="h-5 w-5 text-green-600" />
            ) : (
              <Copy className="h-5 w-5 text-gray-600" />
            )}
            <div className="text-left">
              <div className="font-medium">
                {copied ? 'Copied!' : 'Copy to Clipboard'}
              </div>
              <div className="text-xs opacity-75">
                {copied ? 'Ready to paste anywhere' : 'Copy text to paste elsewhere'}
              </div>
            </div>
          </Button>

          {/* Download as Text File */}
          <Button
            onClick={handleDownload}
            variant="outline"
            className="w-full flex items-center gap-3 justify-start h-12"
          >
            <Download className="h-5 w-5 text-purple-600" />
            <div className="text-left">
              <div className="font-medium">Download</div>
              <div className="text-xs opacity-75">Save as text file</div>
            </div>
          </Button>

          <div className="pt-4 border-t">
            <div className="text-xs text-muted-foreground text-center">
              {selectedRecommendation 
                ? `Sharing roadmap for ${selectedRecommendation.title}`
                : `Sharing ${recommendations.length} personalized recommendations`
              }
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

