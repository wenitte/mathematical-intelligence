# 

Source: https://proofwiki.org/wiki/Integration_by_Parts/Primitive/Proof_1



Theorem
$\ds \int \map f t \map G t \rd t = \map F t \map G t - \int \map F t \map g t \rd t$
on $\closedint a b$.


Proof













\(\ds \map {\dfrac \d {\d t} } {\map F t \map G t}\)

\(=\)







\(\ds \map f t \map G t + \map F t \map g t\)





Product Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \int \paren {\map f t \map G t + \map F t \map g t} \rd t\)

\(=\)







\(\ds \map F t \map G t\)





Fundamental Theorem of Calculus: integrating both sides with respect to $t$








\(\ds \leadsto \ \ \)





\(\ds \int \map f t \map G t \rd t + \int \map F t \map g t \rd t\)

\(=\)







\(\ds \map F t \map G t\)





Linear Combination of Primitives








\(\ds \leadsto \ \ \)





\(\ds \int \map f t \map G t \rd t\)

\(=\)







\(\ds \map F t \map G t - \int \map F t \map g t \rd t\)





rearranging



$\blacksquare$


Also presented as
Integration by Parts is often seen presented in this sort of form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
or:

$\ds \int u \rd v = u v - \int v \rd u$
where it is understood that $u$ and $v$ are functions of the independent variable.


Proof Technique
The technique of solving an integral in the form $\ds \int \map f t \map G t \rd t$ in this manner is called integration by parts.
Its validity as a solution technique stems from the fact that it may be possible to choose $f$ and $G$ such that $G$ is easier to differentiate than to integrate.
Thus the plan is to reduce the integral to one such that $\ds \int \map F t \map g t \rd t$ is easier to solve than $\ds \int \map f t \map G t \rd t$.
It may be, of course, that one or more further applications of this technique are needed before the solution can be extracted.


Sources
1967: Michael Spivak: Calculus ... (previous) ... (next): Part $\text {III}$: Derivatives and Integrals: Chapter $18$: Integration in Elementary Terms: Theorem $1$ (Integration by Parts)
For a video presentation of the contents of this page, visit the Khan Academy.




