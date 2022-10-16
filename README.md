# Snow-Chat
> A react based online chat application.

> Site live at <a href="http://snow-chat-jyoti.netlify.app" target="_blank">http://snow-chat-jyoti.netlify.app</a>

1. Design Pattern is Observer or PubSub : Publisher Subscriber 
> Publisher publishes msg on any event and subscribers are invoked there after. It can be in any form. In this project we used firebase. Our backend is subscribed to firebase. So when there is any change in database or authentication , etc in firebase it releases msg and those are cathced by subscribers for example our frontend side drivers. Then application update the state in real time which is the key feature in chat application.

