# 

Source: https://proofwiki.org/wiki/Digamma_Additive_Formula



Theorem
Let $n \in \N_{>0}$ where $\N_{>0}$ denotes the non-zero natural numbers.
Let $z \in \C \cap z \notin \set {-\dfrac m n: m \in \N}$

Then: 

$\ds \map \psi {n z} = \frac 1 n \sum_{k \mathop = 0}^{n - 1} \map \psi {z + \frac k n} + \ln n$
where:

$\psi$ is the digamma function
$\ln$ is the complex natural logarithm.


Corollary
Let $n \in \N_{>0}$ where $\N_{>0}$ denotes the non-zero natural numbers.
Then: 

$\ds \sum_{k \mathop = 1}^{n - 1} \map \psi {\frac k n} = -\paren {n - 1} \gamma - n \ln n$
where:

$\psi$ is the digamma function
$\ln$ is the complex natural logarithm.
$\gamma$ denotes the Euler-Mascheroni constant.


Proof













\(\ds \paren {2 \pi}^{\paren {n - 1} / 2} n^{1/2 - n z} \map \Gamma {n z}\)

\(=\)







\(\ds \prod_{k \mathop = 0}^{n - 1} \map \Gamma {z + \frac k n}\)





Gauss Multiplication Formula








\(\ds \leadsto \ \ \)





\(\ds \paren {\frac {n - 1} 2 } \map \ln {2 \pi} + \paren {\frac 1 2 - n z} \map \ln n + \map \ln {\map \Gamma {n z} }\)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - 1} \map \ln {\map \Gamma {z + \frac k n} }\)





taking the complex natural logarithm of both sides, Sum of Logarithms 
Work In ProgressIn particular: There still needs to be a complex form of Sum of LogarithmsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.








\(\ds \leadsto \ \ \)





\(\ds -n \map \ln n + n \map \psi {n z}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - 1} \map \psi {z + \frac k n}\)





taking the derivative of both sides, Definition of Digamma Function








\(\ds \leadsto \ \ \)





\(\ds \map \psi {n z}\)

\(=\)







\(\ds \frac 1 n \sum_{k \mathop = 0}^{n - 1} \map \psi {z + \frac k n} + \ln n\)





dividing by $n$ and moving $\ln n$ to right hand side



$\blacksquare$


Also see
Gauss Multiplication Formula
Product Formula for Sine
Cotangent Additive Formula
General Harmonic Number Additive Formula


Sources
1985: Bruce C. Berndt: Ramanujan's Notebooks: Part I: Chapter $8$. Analogues of the Gamma Function
Weisstein, Eric W. "Polygamma Function." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/PolygammaFunction.html




