# 

Source: https://proofwiki.org/wiki/Quintic_Equation/Examples/z%5E5_-_2z%5E4_-_z%5E3_%2B_6z_-_4_%3D_0

Example of Quintic Equations
The quintic equation:

$z^5 - 2 z^4 - z^3 + 6 z - 4 = 0$
has solutions:

$1, 1, 2, -1 \pm i$


Proof
The integer divisors of $4$ are respectively:

$\pm 1, \pm 2, \pm 4$
Thus from Conditions on Rational Solution to Polynomial Equation, the possible rational solutions are:

$\pm 1, \pm 2, \pm 4$

Performing some trial divisions:

                z^4   - z^3 - 2 z^2 - 2 z + 4
      ---------------------------------------
z - 1 ) z^5 - 2 z^4 -   z^3 + 0 z^2 + 6 z - 4
        z^5 -   z^4
        -----------
               -z^4 -   z^3
               -z^4 +   z^3
              -------------
                     -2 z^3 + 0 z^2
                     -2 z^3 + 2 z^2
                      -------------
                             -2 z^2 + 6 z
                             -2 z^2 + 2 z
                              -----------
                                      4 z - 4
                                      4 z - 4
                                      -------

Hence we have that $z - 1$ is a factor of $z^5 - 2 z^4 - z^3 + 6 z - 4$, and so $z = 1$ is a solution.

Trying the same thing again:

              z^3         - 2 z - 4
      -----------------------------
z - 1 ) z^4 - z^3 - 2 z^2 - 2 z + 4
        z^4 - z^3
        ---------
              0    -2 z^2 - 2 z
                   -2 z^2 + 2 z
                   ------------
                           -4 z + 4
                           -4 z + 4
                           --------        

Hence we have that $z - 1$ is another factor of $z^5 - 2 z^4 - z^3 + 6 z - 4$, and so $z = 1$ is another solution.

Trying another trial division:

                z^2 + 2 z + 2
      -----------------------------
z - 2 ) z^3 + 0 z^2 - 2 z - 4
        z^3 - 2 z^2
        -----------
              2 z^2 - 2 z
              2 z^2 - 4 z
              -----------
                      2 z - 4
                      2 z - 4
                      -------

Hence we have that $z - 2$ is another factor of $z^5 - 2 z^4 - z^3 + 6 z - 4$, and so $z = 2$ is another solution.

We are left with:














\(\ds z^2 + 2 z + 2\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \dfrac {-2 \pm \sqrt {2^2 - 4 \times 2} } 2\)





Quadratic Formula: $a = 1$, $b = 2$, $c = 2$














\(\ds \)

\(=\)







\(\ds -1 \pm \sqrt {1 - 2}\)




















\(\ds \)

\(=\)







\(\ds -1 \pm i\)









Hence the result.
$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: Polynomial Equations: $101$




