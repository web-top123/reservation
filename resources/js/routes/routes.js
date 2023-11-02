import store from '../store'
import AdminAuthLayout from '@/contain/admin/auth/AuthLayout.vue';
import AdminLayout from '@/contain/admin/Layout/Layout.vue';
import Layout from '@/contain/checkin/layout/Layout.vue';
import NotFound from '@/contain/404/NotFoundPage.vue';
// Pages
const AdminLogin = () =>
    import ( /* webpackChunkName: "pages" */ '@/contain/admin/auth/Login.vue');
const AdminRegister = () =>
    import ( /* webpackChunkName: "pages" */ '@/contain/admin/auth/Register.vue');
const Login = () =>
    import ( /* webpackChunkName: "pages" */ '@/contain/checkin/auth/Login.vue');

let adminAuthPages = {
    path: '/admin',
    component: AdminAuthLayout,
    name: 'AdminAuthentication',
    children: [{
            path: 'login',
            name: 'AdminLogin',
            component: AdminLogin,
            meta: {
                beforeResolve(routeTo, routeFrom, next) {
                    // If the user is already logged in
                    if (store.getters['isAuthenticated']) {
                        // Redirect to the home page instead
                        if (store.getters['currentRole'] == 'Admin') {
                            next({ name: 'Dashboard' })
                        } else {
                            next();
                            // next({ name: 'AdminLogin' })
                        }
                    } else {
                        // Continue to the login page
                        next()
                    }
                },
            },
        },
        {
            path: 'register',
            name: 'AdminRegister',
            component: AdminRegister,
            meta: {
                beforeResolve(routeTo, routeFrom, next) {
                    // If the user is already logged in
                    if (store.getters['isAuthenticated']) {
                        // Redirect to the home page instead
                        if (store.getters['currentRole'] == 'Admin') {
                            next({ name: 'Dashboard' })
                        } else {
                            next({ name: 'AdminLogin' })
                        }
                    } else {
                        // Continue to the login page
                        next()
                    }
                },
            },
        },
        {
            path: 'logout',
            name: 'logout',
            meta: {
                authRequired: true,
                beforeResolve(routeTo, routeFrom, next) {
                    store.dispatch('logout')
                    next({ name: 'AdminLogin' });
                },
            },
        },
        { path: '*', component: NotFound }
    ]
};

let authPages = {
    path: '/',
    component: Layout,
    name: 'Authentication',
    children: [{
            path: 'login',
            name: 'Login',
            component: Login,
            meta: {
                beforeResolve(routeTo, routeFrom, next) {
                    if (store.getters['currentPassenger'] && store.getters['currentPassenger'].role == 'Passenger') {
                        next({ name: 'Booking' })
                    } else {
                        next();
                    }
                },
            }
        },
        { path: '*', component: NotFound }
    ]
};
const routes = [{
        path: '/admin',
        component: AdminLayout,
        redirect: '/admin/dashboard',
        meta: {
            authRequired: true,
            beforeResolve(routeTo, routeFrom, next) {
                if (store.getters['currentRole'] == 'Admin') {
                    next()
                } else {
                    next({ name: 'AdminLogin' })
                }
            },
        },
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () =>
                    import ('../contain/admin/dashboard/dashboard.vue'),
            },
            {
                path: 'users',
                name: 'AdminUsers',
                component: () =>
                    import ('../contain/admin/users/users.vue'),
            },
            {
                path: 'user/create',
                name: 'AdminUserCreate',
                component: () =>
                    import ('../contain/admin/users/user-create.vue'),
            },
            {
                path: 'user/:userId/edit',
                name: 'AdminUserEdit',
                component: () =>
                    import ('../contain/admin/users/user-edit.vue'),
            },
            {
                path: 'sendgrid',
                name: 'Sendgrid',
                component: () =>
                    import ('../contain/admin/sendgrid/sendgrid.vue'),
            },            
            {
                path: 'sendgrid/:passengerId/email',
                name: 'SendgridPassenger',
                component: () =>
                    import ('../contain/admin/sendgrid/sendgrid-email.vue'),
            },
            {
                path: 'passengers',
                name: 'Passengers',
                component: () =>
                    import ('../contain/admin/passengers/passengers.vue'),
            },
            {
                path: 'passenger/create',
                name: 'PassengerCreate',
                component: () =>
                    import ('../contain/admin/passengers/passenger-create.vue'),
            },
            {
                path: 'passenger/:passengerId/edit',
                name: 'PassengerEdit',
                component: () =>
                    import ('../contain/admin/passengers/passenger-edit.vue'),
            },
            {
                path: 'passenger/:passengerId/flights',
                name: 'PassengerFlights',
                component: () =>
                    import ('../contain/admin/passengers/passenger-flights.vue'),
            },
            {
                path: 'passenger/:passengerId/flight/:flightId/seat',
                name: 'PassengerSeat',
                component: () =>
                    import ('../contain/admin/passengers/passenger-seat.vue'),
            },

            {
                path: 'aircrafts',
                name: 'Aircrafts',
                component: () =>
                    import ('../contain/admin/fleet/aircrafts.vue'),
            },
            {
                path: 'aircraft/create',
                name: 'AircraftCreate',
                component: () =>
                    import ('../contain/admin/fleet/aircraft-create.vue'),
            },
            {
                path: 'aircraft/:aircraftId/edit',
                name: 'AircraftEdit',
                component: () =>
                    import ('../contain/admin/fleet/aircraft-edit.vue'),
            },

            {
                path: 'flights',
                name: 'Flights',
                component: () =>
                    import ('../contain/admin/flights/flights.vue'),
            },
            {
                path: 'flight/create',
                name: 'FlightCreate',
                component: () =>
                    import ('../contain/admin/flights/flight-create.vue'),
            },
            {
                path: 'flight/:flightId/edit',
                name: 'FlightEdit',
                component: () =>
                    import ('../contain/admin/flights/flight-edit.vue'),
            },
            {
                path: 'schedule',
                name: 'Schedule',
                component: () =>
                    import ('../contain/admin/schedule/schedule.vue'),
            },            
            {
                path: 'flight/:flightId/seat-map',
                name: 'FlightSeatMap',
                component: () =>
                    import ('../contain/admin/schedule/flight-seat-map.vue'),
            },
            {
                path: 'upcomingflights',
                name: 'UpcomingFlights',
                component: () =>
                    import ('../contain/admin/upcomingflights/upcomingflights.vue'),
            },
            {
                path: 'upcomingflights/:aircraftFlightsId/edit',
                name: 'UpcomingFlightsEdit',
                component: () =>
                    import ('../contain/admin/upcomingflights/upcomingflights-edit.vue'),
            },
            {
                path: 'baggage',
                name: 'Baggage',
                component: () =>
                    import ('../contain/admin/baggage/baggage.vue'),
            },
            {
                path: 'checkin',
                name: 'CheckIn',
                component: () =>
                    import ('../contain/admin/checkin/checkin.vue'),
            },
        ]
    },
    adminAuthPages,
    {
        path: '/',
        component: Layout,
        redirect: '/login',
        meta: {
            beforeResolve(routeTo, routeFrom, next) {
                if (store.getters['currentPassenger'] && store.getters['currentPassenger'].role == 'Passenger') {
                    console.log(store.getters);
                    next();
                } else {
                    next({ name: 'Login' })
                }
            },
        },
        children: [
            {
                path: 'booking',
                name: 'Booking',
                component: () =>
                    import ('../contain/checkin/booking.vue'),
            },
            {
                path: 'declaration',
                name: 'Declaration',
                component: () =>
                    import ('../contain/checkin/declaration.vue'),
            },
            {
                path: 'dangerous',
                name: 'Dangerous',
                component: () =>
                    import ('../contain/checkin/dangerous.vue'),
            },
            {
                path: 'select-seat',
                name: 'SelectSeat',
                component: () =>
                    import ('../contain/checkin/seat-map.vue'),
            },
            {
                path: 'confirm',
                name: 'Confirm',
                component: () =>
                    import ('../contain/checkin/confirm.vue'),
            },
           
        ]
    },
    authPages,
];

export default routes;