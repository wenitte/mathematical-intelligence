# 

Source: https://proofwiki.org/wiki/Number_of_Parameters_of_Autoregressive_Model

Theorem
Let $S$ be a stochastic process based on an equispaced time series.
Let the values of $S$ at timestamps $t, t - 1, t - 2, \dotsc$ be $z_t, z_{t - 1}, z_{t - 2}, \dotsc$
Let $\tilde z_t, \tilde z_{t - 1}, \tilde z_{t - 2}, \dotsc$ be deviations from a constant mean level $\mu$:

$\tilde z_t = z_t - \mu$
Let $a_t, a_{t - 1}, a_{t - 2}, \dotsc$ be a sequence of independent shocks at timestamps $t, t - 1, t - 2, \dotsc$

Let $M$ be an autoregessive model on $S$ of order $p$:

$\tilde z_t = \phi_1 \tilde z_{t - 1} + \phi_2 \tilde z_{t - 2} + \dotsb + \phi_p \tilde z_{t - p} + a_t$

Then $M$ has $p + 2$ parameters.


Proof
By definition of the parameters of $M$:

The parameters of $M$ consist of:

the constant mean level $\mu$
the variance $\sigma_a^2$ of the underlying (usually white noise) process of the independent shock $a_t$
the coefficients $\phi_1$ to $\phi_p$.

Thus:

there are $p$ parameters of the form $\phi_j$
$1$ parameter $\mu$
$1$ parameter $\sigma_a^2$.
That is: $p + 1 + 1 = p + 2$ parameters.
$\blacksquare$


Sources
1994: George E.P. Box, Gwilym M. Jenkins and Gregory C. Reinsel: Time Series Analysis: Forecasting and Control (3rd ed.) ... (previous) ... (next):
$1$: Introduction:
$1.2$ Stochastic and Deterministic Dynamic Mathematical Models
$1.2.1$ Stationary and Nonstationary Stochastic Models for Forecasting and Control: Autoregressive models




