# 

Source: https://proofwiki.org/wiki/Integration_by_Parts/Definite_Integral



Theorem
Let $f$ and $g$ be real functions which are continuous on the closed interval $\closedint a b$.
Let $f$ and $g$ have primitives $F$ and $G$ respectively on $\closedint a b$.
Then:

$\ds \int_a^b \map f t \map G t \rd t = \bigintlimits {\map F t \map G t} a b - \int_a^b \map F t \map g t \rd t$


Proof
By Product Rule for Derivatives:

$\map D {F G} = f G + F g$
Thus $F G$ is a primitive of $f G + F g$ on $\closedint a b$.
Hence, by the Fundamental Theorem of Calculus:

$\ds \int_a^b \paren {\map f t \map G t + \map F t \map g t} \rd t = \bigintlimits {\map F t \map G t} a b$
The result follows.
$\blacksquare$


Proof Technique
The technique of solving an integral in the form $\ds \int \map f t \map G t \rd t$ in this manner is called integration by parts.
Its validity as a solution technique stems from the fact that it may be possible to choose $f$ and $G$ such that $G$ is easier to differentiate than to integrate.
Thus the plan is to reduce the integral to one such that $\ds \int \map F t \map g t \rd t$ is easier to solve than $\ds \int \map f t \map G t \rd t$.
It may be, of course, that one or more further applications of this technique are needed before the solution can be extracted.


Sources
1967: Michael Spivak: Calculus ... (previous) ... (next): Part $\text {III}$: Derivatives and Integrals: Chapter $18$: Integration in Elementary Terms: Theorem $1$ (Integration by Parts)
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $6$. Integral Calculus: Appendix: Rules and Techniques of Integration: $2.1$ Integration by parts
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 13.21$




