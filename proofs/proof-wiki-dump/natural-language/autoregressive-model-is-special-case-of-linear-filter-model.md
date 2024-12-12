# 

Source: https://proofwiki.org/wiki/Autoregressive_Model_is_Special_Case_of_Linear_Filter_Model

Theorem
Let $S$ be a stochastic process based on an equispaced time series.
Let the values of $S$ at timestamps $t, t - 1, t - 2, \dotsc$ be $z_t, z_{t - 1}, z_{t - 2}, \dotsc$
Let $\tilde z_t, \tilde z_{t - 1}, \tilde z_{t - 2}, \dotsc$ be deviations from a constant mean level $\mu$:

$\tilde z_t = z_t - \mu$
Let $a_t, a_{t - 1}, a_{t - 2}, \dotsc$ be a sequence of independent shocks at timestamps $t, t - 1, t - 2, \dotsc$

Let $M$ be an autoregessive model on $S$ of order $p$:

$(1): \quad \tilde z_t = \phi_1 \tilde z_{t - 1} + \phi_2 \tilde z_{t - 2} + \dotsb + \phi_p \tilde z_{t - p} + a_t$

Then $M$ is a special case of a linear filter model.


Proof
We can eliminate $\tilde z_{t - 1}$ from the right hand side of $(1)$ by substituting:

$\tilde z_{t - 1} = \phi_1 \tilde z_{t - 2} + \phi_2 \tilde z_{t - 3} + \dotsb + \phi_p \tilde z_{t - p - 1} + a_{t - 1}$
Similarly we can substitute for $\tilde z_{t - 2}$, and so on.
Eventually we get an infinite series in $a_{t - j}$.
Hence:

$\map \phi B \tilde z_t = a_t$
is equivalent to:

$\tilde z_t = \map \psi B a_t$
such that:

$\map \psi B = \map {\phi^{-1} } B$
Hence the result by definition of linear filter model.
$\blacksquare$


Sources
1994: George E.P. Box, Gwilym M. Jenkins and Gregory C. Reinsel: Time Series Analysis: Forecasting and Control (3rd ed.) ... (previous) ... (next):
$1$: Introduction:
$1.2$ Stochastic and Deterministic Dynamic Mathematical Models
$1.2.1$ Stationary and Nonstationary Stochastic Models for Forecasting and Control: Autoregressive models




