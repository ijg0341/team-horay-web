import { useState } from 'react'
import { Heart, Star, Users, Gamepad2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    // Here you would typically send a request to your backend to update the user's wishlist
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Cosmic Quest</h1>
          <p className="text-xl md:text-2xl text-purple-200">Embark on an Epic Space Adventure</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Cosmic Quest Game Screenshot"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">About the Game</h2>
            <p className="mb-6">Cosmic Quest is an immersive space exploration game where you command your own starship, discover alien worlds, and unravel the mysteries of the universe.</p>
            <div className="flex space-x-4 mb-6">
              <Badge variant="secondary" className="text-sm">Sci-Fi</Badge>
              <Badge variant="secondary" className="text-sm">Adventure</Badge>
              <Badge variant="secondary" className="text-sm">Multiplayer</Badge>
            </div>
            <Button
              onClick={handleWishlist}
              variant={isWishlisted ? "secondary" : "default"}
              className="w-full md:w-auto"
            >
              {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
              <Heart className={`ml-2 h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
            </Button>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="bg-purple-800 border-purple-700">
            <CardContent className="pt-6">
              <Star className="h-12 w-12 mb-4 text-yellow-400" />
              <h3 className="text-xl font-bold mb-2">Stellar Reviews</h3>
              <p className="text-purple-200">Join thousands of satisfied space explorers in this highly-rated cosmic adventure.</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-800 border-purple-700">
            <CardContent className="pt-6">
              <Users className="h-12 w-12 mb-4 text-green-400" />
              <h3 className="text-xl font-bold mb-2">Multiplayer Missions</h3>
              <p className="text-purple-200">Team up with friends or join a crew to tackle challenging missions across the galaxy.</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-800 border-purple-700">
            <CardContent className="pt-6">
              <Gamepad2 className="h-12 w-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2">Endless Exploration</h3>
              <p className="text-purple-200">Discover procedurally generated planets, each with unique landscapes and alien life.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}