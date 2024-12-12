# 

Source: https://proofwiki.org/wiki/Determinant_of_Autocorrelation_Matrix_is_Strictly_Positive/Examples/Order_3

Example of Use of Determinant of Autocorrelation Matrix is Strictly Positive
Let $\rho_k$ denote the autocorrelation of a strictly stationary stochastic process $S$ at lag $1k$.
Then:

$-1 < \rho_1 < 1$
$-1 < \rho_2 < 1$
$-1 < \dfrac {\rho_2 - \rho_1^2} {1 - \rho_1^2} < 1$


Proof
Consider the autocorrelation matrix of order $3$:














\(\ds \map \det {\mathbf P_3}\)

\(>\)







\(\ds 0\)





Determinant of Autocorrelation Matrix is Strictly Positive














\(\ds \begin {vmatrix} 1 & \rho_1 & \rho_2 \\ \rho_1 & 1 & \rho_1 \\ \rho_2 & \rho_1 & 1 \end {vmatrix}\)

\(>\)







\(\ds 0\)





Definition of Autocorrelation Matrix














\(\ds \paren {1 - \rho_1^2} - \rho_1^2 \paren {1 - \rho_2} + \rho_2 \paren {\rho_1^2 - \rho_2}\)

\(>\)







\(\ds 0\)





Definition of Determinant








\(\ds \leadsto \ \ \)





\(\ds \)

\(<\)







\(\ds 1\)





irritating algebra that I can't resolve








\(\ds \leadsto \ \ \)





\(\ds \size {\dfrac {\rho_2 - \rho_1^2} {1 - \rho_1^2} }\)

\(<\)







\(\ds 1\)










Also from:














\(\ds \begin {vmatrix} 1 & \rho_1 \\ \rho_1 & 1 \end {vmatrix}\)

\(>\)







\(\ds 0\)




















\(\ds \begin {vmatrix} 1 & \rho_2 \\ \rho_2 & 1 \end {vmatrix}\)

\(>\)







\(\ds 0\)









the other conditions follow from the order $2$ case.
$\blacksquare$


Sources
1994: George E.P. Box, Gwilym M. Jenkins and Gregory C. Reinsel: Time Series Analysis: Forecasting and Control (3rd ed.) ... (previous) ... (next):
Part $\text {I}$: Stochastic Models and their Forecasting:
$2$: Autocorrelation Function and Spectrum of Stationary Processes:
$2.1$ Autocorrelation Properties of Stationary Models:
$2.1.3$ Positive Definiteness and the Autocovariance Matrix: Conditions satisfied by the autocorrelations of a stationary process




