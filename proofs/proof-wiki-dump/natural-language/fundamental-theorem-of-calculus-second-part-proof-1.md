# 

Source: https://proofwiki.org/wiki/Fundamental_Theorem_of_Calculus/Second_Part/Proof_1

Theorem
Let $f$ be a real function which is continuous on the closed interval $\closedint a b$.
Then:

$(1): \quad f$ has a primitive on $\closedint a b$
$(2): \quad$ If $F$ is any primitive of $f$ on $\closedint a b$, then:
$\ds \int_a^b \map f t \rd t = \map F b - \map F a = \bigintlimits {\map F t} a b$


Proof
Let $G$ be defined on $\closedint a b$ by:

$\ds \map G x = \int_a^x \map f t \rd t$
We have:

$\ds \map G a = \int_a^a \map f t \rd t = 0$ from Integral on Zero Interval
$\ds \map G b = \int_a^b \map f t \rd t$ from the definition of $G$ above.
Therefore, we can compute:














\(\ds \int_a^b \map f t \rd t\)

\(=\)







\(\ds \int_a^a \map f t \rd t + \int_a^b \map f t \rd t\)





Sum of Integrals on Adjacent Intervals for Continuous Functions














\(\ds \)

\(=\)







\(\ds \map G a + \map G b\)





From the definition of $G$














\(\ds \)

\(=\)







\(\ds \map G b - \map G a\)





$\map G a = 0$



By the first part of the theorem, $G$ is a primitive of $f$ on $\closedint a b$.
By Primitives which Differ by Constant‎, we have that any primitive $F$ of $f$ on $\closedint a b$ satisfies $\map F x = \map G x + c$, where $c$ is a constant.
Thus we conclude:














\(\ds \int_a^b \map f t \rd t\)

\(=\)







\(\ds \paren {\map G b + c} - \paren {\map G a + c}\)




















\(\ds \)

\(=\)







\(\ds \map F b - \map F a\)









$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 13.14$




