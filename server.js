function handleRoomService(req, res) {
    if (!isLoggedIn(req)) {
      return res.send(401)
    }
  
    const API_KEY = "proj_56729923-0e35-4bc6-81be-3eaac9b06e6a    "
    const user = "this-user-id"
    const body = req.body
  
    const r = await fetch('https://super.roomservice.dev/provision', {
      method: 'post',
      headers: {
        Authorization: `Bearer: ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: user,
        resources: body,
      }),
    });
  
    return res.json(await r.json())
  }

  // i coded lots today and i want a green square