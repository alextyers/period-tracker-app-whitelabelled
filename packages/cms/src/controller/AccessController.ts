import { NextFunction, Request, Response } from 'express'
import passport from 'passport'

export class AccessController {
  async login(request: Request, response: Response, next: NextFunction) {
    return passport.authenticate('local', {
      failureRedirect: '/login',
      successRedirect: '/encyclopedia',
      failureFlash: 'Invalid username or password.',
    })(request, response, next)
  }

  async logout(request: Request, response: Response, next: NextFunction) {
    request.logout()
    response.redirect('/login')
  }
}
