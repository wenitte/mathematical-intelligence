# 

Source: https://proofwiki.org/wiki/Calculation_Rounding_Error/Examples/Arbitrary_Example_1

Example of Calculation Rounding Error
Consider the equation:

$x = \dfrac 1 {1 - \cos 1 \degrees}$
Evaluating the calculation while rounding to $4$ decimal places gives:

$x = 5000$
but the true value is $6565.8$ to $1$ decimal place.
Hence the calculation rounding error of this calculation is $1.6565.8$, or some $24 \%$ or $31 \%$ relative error, depending on how the latter is calculated.


Proof
We have:

$\cos 1 \degrees = 0.999847695 \ldots$
which is $0.9998$ to $4$ decimal places.

So to $4$ decimal places:














\(\ds \dfrac 1 {1 - \cos 1 \degrees}\)

\(=\)







\(\ds \dfrac 1 {1 - 0.9998}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {0.0002}\)




















\(\ds \)

\(=\)







\(\ds 5000\)










To $9$ decimal places:














\(\ds \dfrac 1 {1 - \cos 1 \degrees}\)

\(=\)







\(\ds \dfrac 1 {1 - 0.999847695}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {0.000152305}\)




















\(\ds \)

\(=\)







\(\ds 6565.772 \ldots\)










Hence we calculate the relative error as follows, using the two variants:














\(\ds \dfrac {\size {6565.8 - 5000} } {6565.8} \times 100 \%\)

\(=\)







\(\ds 23.85 \%\)




















\(\ds \dfrac {\size {6565.8 - 5000} } {5000} \times 100 \%\)

\(=\)







\(\ds 31.32 \%\)









$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): error: 1. (in numerical computation) Rounding (or roundoff) errors
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): error: 1. (in numerical computation) Rounding (or roundoff) errors




