# 

Source: https://proofwiki.org/wiki/Autocovariance_Matrix_for_Stationary_Process_is_Variance_by_Autocorrelation_Matrix

Theorem
Let $S$ be a strictly stationary stochastic process giving rise to a time series $T$.
Let $\sequence {s_n}$ be a sequence of $n$ successive values of $T$:

$\sequence {s_n} = \tuple {z_1, z_2, \dotsb, z_n}$
Let $\boldsymbol \Gamma_n$ denote the autocovariance matrix associated with $S$ for $\sequence {s_n}$.
Let $\mathbf P_n$ denote the autocorrelation matrix associated with $S$ for $\sequence {s_n}$.

Then:

$\boldsymbol \Gamma_n = \sigma_z^2 \mathbf P_n$
where $\sigma_z^2$ denotes the variance of $S$.


Proof
From Autocorrelation of Strictly Stationary Stochastic Process:

$\rho_k = \dfrac {\gamma_k} {\gamma_0}$
Then from Autocovariance at Zero Lag for Strictly Stationary Stochastic Process is Variance:

$\gamma_0 = \sigma_z^2$
Hence:

$\gamma_k = \sigma_z^2 \rho_k$
and the result follows.
$\blacksquare$


Sources
1994: George E.P. Box, Gwilym M. Jenkins and Gregory C. Reinsel: Time Series Analysis: Forecasting and Control (3rd ed.) ... (previous) ... (next):
Part $\text {I}$: Stochastic Models and their Forecasting:
$2$: Autocorrelation Function and Spectrum of Stationary Processes:
$2.1$ Autocorrelation Properties of Stationary Models:
$2.1.3$ Positive Definiteness and the Autocovariance Matrix




