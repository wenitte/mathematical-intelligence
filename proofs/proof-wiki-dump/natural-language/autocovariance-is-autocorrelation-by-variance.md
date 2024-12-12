# 

Source: https://proofwiki.org/wiki/Autocovariance_is_Autocorrelation_by_Variance

Theorem
Let $\map S z$ be a stochastic process giving rise to a time series $T$.
Let $S$ be weakly stationary of order $2$ or greater.
Let $\gamma_k$ denote the autocovariance coefficient of $S$ at lag $k$.
Let $\rho_k$ denote the autocorrelation coefficient of $S$ at lag $k$.

Then:

$\gamma_k = \rho_k \sigma_z^2$
where $\sigma_z^2$ denotes the variance of $S$.


Proof













\(\ds \rho_k\)

\(=\)







\(\ds \dfrac {\expect {\paren {z_t - \mu} \paren {z_{t + k} - \mu} } } {\sqrt {\expect {\paren {z_t - \mu}^2} \expect {\paren {z_{t + k} - \mu}^2} } }\)





Definition of Autocorrelation














\(\ds \gamma_k\)

\(=\)







\(\ds \expect {\paren {z_t - \mu} \paren {z_{t + k} - \mu} }\)





Definition of Autocovariance














\(\ds \sigma_z^2\)

\(=\)







\(\ds \expect {\paren {z_t - \mu}^2}\)





Definition of Variance of Stochastic Process














\(\ds \)

\(=\)







\(\ds \expect {\paren {z_{t + k} - \mu}^2}\)





as $S$ is weakly stationary of order $2$ or greater








\(\ds \leadsto \ \ \)





\(\ds \rho_k\)

\(=\)







\(\ds \dfrac {\gamma_k} {\sigma_z^2 \sigma_z^2}\)









Hence the result.
$\blacksquare$


Sources
1994: George E.P. Box, Gwilym M. Jenkins and Gregory C. Reinsel: Time Series Analysis: Forecasting and Control (3rd ed.) ... (previous) ... (next):
Part $\text {I}$: Stochastic Models and their Forecasting:
$2$: Autocorrelation Function and Spectrum of Stationary Processes:
$2.1$ Autocorrelation Properties of Stationary Models:
$2.1.4$ Autocovariance and Autocorrelation Functions




