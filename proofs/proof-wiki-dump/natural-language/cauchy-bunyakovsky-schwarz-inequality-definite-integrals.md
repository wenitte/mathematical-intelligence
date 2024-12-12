# 

Source: https://proofwiki.org/wiki/Cauchy-Bunyakovsky-Schwarz_Inequality/Definite_Integrals



Theorem
Let $f$ and $g$ be real functions which are continuous on the closed interval $\closedint a b$.

Then:

$\ds \paren {\int_a^b \map f t \, \map g t \rd t}^2 \le \int_a^b \paren {\map f t}^2 \rd t \int_a^b \paren {\map g t}^2 \rd t$


Proof









\(\ds \forall x \in \R: \, \)



\(\ds 0\)

\(\le\)







\(\ds \paren {x \map f t + \map g t}^2\)




















\(\ds 0\)

\(\le\)







\(\ds \int_a^b \paren {x \map f t + \map g t}^2 \rd t\)





Relative Sizes of Definite Integrals














\(\ds \)

\(=\)







\(\ds x^2 \int_a^b \paren {\map f t}^2 \rd t + 2 x \int_a^b \map f t \, \map g t \rd t + \int_a^b \paren {\map g t}^2 \rd t\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds A x^2 + 2 B x + C\)









where:














\(\ds A\)

\(=\)







\(\ds \int_a^b \paren {\map f t}^2 \rd t\)




















\(\ds B\)

\(=\)







\(\ds \int_a^b \map f t \map g t \rd t\)




















\(\ds C\)

\(=\)







\(\ds \int_a^b \paren {\map g t}^2 \rd t\)









The quadratic equation $A x^2 + 2 B x + C$ is non-negative for all $x$.
It follows (using the same reasoning as in Cauchy's Inequality) that the discriminant $\paren {2 B}^2 - 4 A C$ of this polynomial must be non-positive.
Thus:

$B^2 \le A C$
and hence the result.
$\blacksquare$


Also known as
The Cauchy-Bunyakovsky-Schwarz Inequality in its various form is also known as:

the Cauchy-Schwarz-Bunyakovsky Inequality
the Cauchy-Schwarz Inequality
Schwarz's Inequality or the Schwarz Inequality
Bunyakovsky's Inequality or Buniakovski's Inequality.
For brevity, it is sometimes referred to by the abbreviations CS inequality or CBS inequality.


Source of Name
This entry was named for Augustin Louis Cauchy, Karl Hermann Amandus Schwarz and Viktor Yakovlevich Bunyakovsky.


Historical Note
The Cauchy-Bunyakovsky-Schwarz Inequality for Definite Integrals was first stated in this form by Bunyakovsky in $1859$, and later rediscovered by Schwarz in $1888$.


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.2$ Inequalities: Schwarz's Inequality: $3.2.11$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 36$: Inequalities: $36.13$: Cauchy-Schwarz Inequality for Integrals
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.2$: Examples: Example $2.2.11$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 13.25$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Cauchy-Schwarz inequality: $(1)$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Cauchy-Schwarz inequality: $(1)$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Cauchy-Schwarz inequality for integrals
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Cauchy-Schwarz inequality for integrals




