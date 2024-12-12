# 

Source: https://proofwiki.org/wiki/ARIMA_Model_subsumes_ARMA_Model

Theorem
Let $S$ be a stochastic process based on an equispaced time series.
Let $M$ be an ARMA model for $S$.
Then $M$ is also an implementation of an ARIMA model.


Proof
Let the values of $S$ at timestamps $t, t - 1, t - 2, \dotsc$ be $z_t, z_{t - 1}, z_{t - 2}, \dotsc$
Let $\tilde z_t, \tilde z_{t - 1}, \tilde z_{t - 2}, \dotsc$ be deviations from a constant mean level $\mu$:

$\tilde z_t = z_t - \mu$
Let $a_t, a_{t - 1}, a_{t - 2}, \dotsc$ be a sequence of independent shocks at timestamps $t, t - 1, t - 2, \dotsc$

By definition of ARMA model, $M$ is implemented as:

$(1): \quad \tilde z_t = \phi_1 \tilde z_{t - 1} + \phi_2 \tilde z_{t - 2} + \dotsb + \phi_p \tilde z_{t - p} + a_t - \theta_1 a_{t - 1} - \theta_2 a_{t - 2} - \dotsb - \theta_q a_{t - q}$

The general ARIMA model is implemented as:

$w_t = \phi_1 w_{t - 1} + \phi_2 w_{t - 2} + \dotsb + \phi_p w_{t - p} + a_t - \theta_1 a_{t - 1} - \theta_2 a_{t - 2} - \dotsb - \theta_q a_{t - q}$
where:

$w_t = \nabla^d z_t$
Letting $d = 0$ we have:

$w_t = z_t$
Setting $w_t = z_t - \mu = \tilde z$, we recover $(1)$.
$\blacksquare$


Sources
1994: George E.P. Box, Gwilym M. Jenkins and Gregory C. Reinsel: Time Series Analysis: Forecasting and Control (3rd ed.) ... (previous) ... (next):
$1$: Introduction:
$1.2$ Stochastic and Deterministic Dynamic Mathematical Models
$1.2.1$ Stationary and Nonstationary Stochastic Models for Forecasting and Control: Nonstationary models




