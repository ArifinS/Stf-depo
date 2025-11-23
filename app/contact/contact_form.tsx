"use client"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle } from "lucide-react"

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
    phone: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: "", email: "", subject: "", message: "", company: "", phone: "" })
      setTimeout(() => setSubmitted(false), 5000)
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            {"Get in Touch"}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 text-foreground">
            {"Let's Start a Conversation"}
          </h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            {
              "Ready to bring your vision to life? We'd love to hear about your project and explore how we can help you achieve your goals."
            }
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  {"Contact Information"}
                </CardTitle>
                <CardDescription>{"Multiple ways to reach us. Choose what works best for you."}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">{"Email"}</p>
                    <p className="text-muted-foreground">{"hello@company.com"}</p>
                    <p className="text-sm text-muted-foreground">{"We respond within 24 hours"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">{"Phone"}</p>
                    <p className="text-muted-foreground">{"(555) 123-4567"}</p>
                    <p className="text-sm text-muted-foreground">{"Mon-Fri, 9AM-6PM EST"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-black mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">{"Office"}</p>
                    <p className="text-muted-foreground">{"123 Business Ave"}</p>
                    <p className="text-muted-foreground">{"New York, NY 10001"}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Clock className="h-6 w-6 text-primary" />
                  {"Business Hours"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{"Monday - Friday"}</span>
                  <span className="font-medium">{"9:00 AM - 6:00 PM"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{"Saturday"}</span>
                  <span className="font-medium">{"10:00 AM - 4:00 PM"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{"Sunday"}</span>
                  <span className="font-medium text-accent">{"Closed"}</span>
                </div>
                <Separator className="my-4" />
                <p className="text-sm text-muted-foreground">
                  {"Emergency support available 24/7 for existing clients"}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">{"Quick Response Guarantee"}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {
                    "We understand your time is valuable. That's why we guarantee a response to all inquiries within 24 hours during business days."
                  }
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl">{"Send us a Message"}</CardTitle>
                <CardDescription className="text-base">
                  {
                    "Fill out the form below and we'll get back to you as soon as possible. The more details you provide, the better we can assist you."
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted && (
                  <div className="mb-8 p-6 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                      <div>
                        <h4 className="font-semibold text-green-800 dark:text-green-200">
                          {"Message Sent Successfully!"}
                        </h4>
                        <p className="text-green-700 dark:text-green-300 text-sm">
                          {"Thank you for reaching out. We'll review your message and respond within 24 hours."}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        {"Full Name"} <span className="text-destructive">{"*"}</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        {"Email Address"} <span className="text-destructive">{"*"}</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-foreground">
                        {"Company Name"}
                      </label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company"
                        value={form.company}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground">
                        {"Phone Number"}
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={form.phone}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      {"Subject"}
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What can we help you with?"
                      value={form.subject}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      {"Message"} <span className="text-destructive">{"*"}</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your project, timeline, budget, or any specific requirements..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="resize-none"
                    />
                    <p className="text-xs text-muted-foreground">
                      {"The more details you provide, the better we can tailor our response to your needs."}
                    </p>
                  </div>

                  <Button type="submit" disabled={loading} className="w-full h-12 text-base font-medium" size="lg">
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2" />
                        {"Sending Message..."}
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        {"Send Message"}
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    {"By submitting this form, you agree to our privacy policy and terms of service."}
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{"Frequently Asked Questions"}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {"Quick answers to common questions. Can't find what you're looking for? Send us a message above."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">{"How quickly do you respond?"}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {
                    "We respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly."
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">{"Do you offer free consultations?"}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {
                    "Yes! We offer a complimentary 30-minute consultation to discuss your project and explore how we can help."
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">{"What information should I include?"}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {
                    "Include your project goals, timeline, budget range, and any specific requirements. The more details, the better we can assist you."
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">{"Can we schedule a call?"}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {
                    "Mention your preferred times in your message and we'll coordinate a call that works for both of us."
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ContactForm
