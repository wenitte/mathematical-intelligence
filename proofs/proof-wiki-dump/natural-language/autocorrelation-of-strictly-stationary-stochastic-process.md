# 

Source: https://proofwiki.org/wiki/Autocorrelation_of_Strictly_Stationary_Stochastic_Process

Example of Strictly Stationary Stochastic Process
Let $S$ be a strictly stationary stochastic process giving rise to a time series $T$.

It is necessary that:

The autocorrelation between every two observations $z_t, z_{t + k}$ separated by a given lag $k$
is the same as:

the autocorrelation between every other two observations $z_{t + m}, z_{t + m + k}$ separated by a given lag $k$

For such a strictly stationary stochastic process:

$\rho_k = \dfrac {\gamma_k} {\gamma_0}$
where $\gamma_k$ denotes the autocovariance of $S$.


Proof
The autocorrelation is defined as:

$\rho_k := \dfrac {\expect {\paren {z_t - \mu} \paren {z_{t + k} - \mu} } } {\sqrt {\expect {\paren {z_t - \mu}^2} \expect {\paren {z_{t + k} - \mu}^2} } }$
The autocovariance is defined as:

$\gamma_k := \expect {\paren {z_t - \mu} \paren {z_{t - k} - \mu} }$
Hence:

$\rho_k := \dfrac {\gamma_k} {\sqrt {\expect {\paren {z_t - \mu}^2} \expect {\paren {z_{t + k} - \mu}^2} } }$
Then we have that for a strictly stationary stochastic process:

$\expect {\paren {z_t - \mu}^2} = \sigma_z^2$
where $\sigma_z^2$ is the variance of $S$ and, for a strictly stationary stochastic process, is constant.
Thus:

$\rho_k := \dfrac {\gamma_k} {\sigma_t^2}$
Then from Autocovariance at Zero Lag for Strictly Stationary Stochastic Process is Variance:

$\sigma_z^2 = \gamma_0$
Hence:

$\rho_k = \dfrac {\gamma_k} {\gamma_0}$
$\blacksquare$


Sources
1994: George E.P. Box, Gwilym M. Jenkins and Gregory C. Reinsel: Time Series Analysis: Forecasting and Control (3rd ed.) ... (previous) ... (next):
Part $\text {I}$: Stochastic Models and their Forecasting:
$2$: Autocorrelation Function and Spectrum of Stationary Processes:
$2.1$ Autocorrelation Properties of Stationary Models:
$2.1.2$ Stationary Stochastic Processes: Autocovariance and autocorrelation coefficients: $(2.1.6)$




