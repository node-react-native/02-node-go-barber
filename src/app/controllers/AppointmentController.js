const { User, Appointment } = require('../models')

class AppointmentController {
  async create (req, res) {
    const provider = await User.findByPk(req.params.provider)
    return res.render('appointments/create', { provider })
  }

  async store (req, res) {
    const { id } = req.session.user
    const { provider } = req.params
    const { date } = req.body

    await Appointment.create({
      user_id: id,
      provider_id: provider,
      date
    })

    return res.redirect('/app/dashboard')
  }

  async list (req, res) {
    const { id } = req.session.user
    const appointments = await Appointment.findAll({
      where: {
        provider_id: id
      },
      order: [['date', 'ASC']],
      include: [{ model: User, as: 'user' }]
    })
    return res.render('appointments/list', { appointments })
  }
}

module.exports = new AppointmentController()
