# 

Source: https://proofwiki.org/wiki/Autocovariance_at_Zero_Lag_for_Strictly_Stationary_Stochastic_Process_is_Variance

Example of Strictly Stationary Stochastic Process
Let $S$ be a strictly stationary stochastic process giving rise to a time series $T$.
Then the autocovariance at zero lag is given by:

$\gamma_0 = \sigma_z^2$
where $\sigma_z^2$ is the variance of $S$.


Proof
By definition, the autocovariance of $S$ at lag $k$ is defined as:

$\gamma_k := \cov {z_t, z_{t + k} } = \expect {\paren {z_t - \mu} \paren {z_{t - k} - \mu} }$
where:

$z_t$ is the observation at time $t$
$\mu$ is the mean of $S$
$\expect \cdot$ is the expectation.

For a strictly stationary stochastic process:

$\expect {\paren {z_t - \mu}^2} = \sigma_z^2$
where:

$\mu$ is the constant mean level of $S$
$\expect {\paren {z_t - \mu}^2}$ is the expectation of $\paren {z_t - \mu}^2$
$\sigma_z^2$ is the variance of $S$ and, for a strictly stationary stochastic process, is constant.

Hence we have that:














\(\ds \gamma_0\)

\(=\)







\(\ds \expect {\paren {z_t - \mu} \paren {z_{t + 0} - \mu} }\)




















\(\ds \)

\(=\)







\(\ds \expect {\paren {z_t - \mu}^2}\)




















\(\ds \)

\(=\)







\(\ds \sigma_z^2\)









$\blacksquare$


Sources
1994: George E.P. Box, Gwilym M. Jenkins and Gregory C. Reinsel: Time Series Analysis: Forecasting and Control (3rd ed.) ... (previous) ... (next):
Part $\text {I}$: Stochastic Models and their Forecasting:
$2$: Autocorrelation Function and Spectrum of Stationary Processes:
$2.1$ Autocorrelation Properties of Stationary Models:
$2.1.2$ Stationary Stochastic Processes: Autocovariance and autocorrelation coefficients




