# 

Source: https://proofwiki.org/wiki/Determinant_of_Autocorrelation_Matrix_is_Strictly_Positive



Theorem
Let $S$ be a strictly stationary stochastic process giving rise to a time series $T$.
Let $\sequence {s_n}$ be a sequence of $n$ successive values of $T$:

$\sequence {s_n} = \tuple {z_1, z_2, \dotsb, z_n}$
Let $\mathbf P_n$ denote the autocorrelation matrix associated with $S$ for $\sequence {s_n}$.

The determinant of $\mathbf P_n$ is strictly positive.


Proof
We have that the Autocorrelation Matrix is Positive Definite.
The result follows from Determinant of Positive Definite Matrix is Strictly Positive.
$\blacksquare$


Examples
Order $2$
Let $\rho_1$ be the autocorrelation of a strictly stationary stochastic process $S$ at lag $1$.
Then:

$-1 < \rho_1 < 1$


Order $3$
Let $\rho_k$ denote the autocorrelation of a strictly stationary stochastic process $S$ at lag $1k$.
Then:

$-1 < \rho_1 < 1$
$-1 < \rho_2 < 1$
$-1 < \dfrac {\rho_2 - \rho_1^2} {1 - \rho_1^2} < 1$


Sources
1994: George E.P. Box, Gwilym M. Jenkins and Gregory C. Reinsel: Time Series Analysis: Forecasting and Control (3rd ed.) ... (previous) ... (next):
Part $\text {I}$: Stochastic Models and their Forecasting:
$2$: Autocorrelation Function and Spectrum of Stationary Processes:
$2.1$ Autocorrelation Properties of Stationary Models:
$2.1.3$ Positive Definiteness and the Autocovariance Matrix: Conditions satisfied by the autocorrelations of a stationary process




