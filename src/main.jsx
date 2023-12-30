/* @refresh reload */
import { render } from 'solid-js/web'
import App from './App'
import { Router, Route } from '@solidjs/router'
import { Dedicatoria, Cxenoj, EnLaFlavaUrbo, FrontPage, Kagxoj, KioNiEstas, LaAtendo, Nokte, Nuda, Revo, SubViaOmbro } from './components/Chapters'

const root = document.getElementById('root')
render(() => (
    <Router root={App}>
        <Route component={FrontPage} path="/" />
        <Route component={FrontPage} path="/frontpagxo" />
        <Route component={Dedicatoria} path="/dedicxo" />
        <Route component={Kagxoj} path="/kagxoj" />
        <Route component={KioNiEstas} path="/kio-ni-estas" />
        <Route component={Cxenoj} path="/cxenoj" />
        <Route component={Nokte} path="/nokte" />
        <Route component={LaAtendo} path="/la-atendo" />
        <Route component={Nuda} path="/nuda" />
        <Route component={Revo} path="/revo" />
        <Route component={SubViaOmbro} path="/sub-via-ombro" />
        <Route component={EnLaFlavaUrbo} path="/en-la-flava-urbo" />
    </Router>
), root)
