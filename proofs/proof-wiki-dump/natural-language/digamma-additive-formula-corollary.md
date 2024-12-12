# 

Source: https://proofwiki.org/wiki/Digamma_Additive_Formula/Corollary

Corollary to Digamma Additive Formula
Let $n \in \N_{>0}$ where $\N_{>0}$ denotes the non-zero natural numbers.
Then: 

$\ds \sum_{k \mathop = 1}^{n - 1} \map \psi {\frac k n} = -\paren {n - 1} \gamma - n \ln n$
where:

$\psi$ is the digamma function
$\ln$ is the complex natural logarithm.
$\gamma$ denotes the Euler-Mascheroni constant.


Proof













\(\ds \frac 1 n \sum_{k \mathop = 0}^{n - 1} \map \psi {z + \frac k n} + \ln n\)

\(=\)







\(\ds \map \psi {n z}\)





Digamma Additive Formula








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^{n - 1} \map \psi {z + \frac k n} + n \ln n\)

\(=\)







\(\ds n \map \psi {n z}\)





multiplying both sides by $n$








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^{n - 1} \map \psi {z + \frac k n}\)

\(=\)







\(\ds n \map \psi {n z} - n \ln n\)





subtracting $n \ln n$ from both sides








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 1}^{n - 1} \map \psi {z + \frac k n} + \map \psi z\)

\(=\)







\(\ds n \map \psi {n z} - n \ln n\)





reindexing the sum








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 1}^{n - 1} \map \psi {z + \frac k n}\)

\(=\)







\(\ds n \map \psi {n z} - \map \psi z - n \ln n\)





subtracting $\map \psi z$ from both sides








\(\ds \leadsto \ \ \)





\(\ds \lim_{z \mathop \to 0} \paren {\sum_{k \mathop = 1}^{n - 1} \map \psi {z + \frac k n} }\)

\(=\)







\(\ds \lim_{z \mathop \to 0} \paren {n \map \psi {n z} - \map \psi z} - n \ln n\)





taking the limit as $z$ approaches $0$ on both sides








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 1}^{n - 1} \map \psi {\frac k n}\)

\(=\)







\(\ds \lim_{z \mathop \to 0} \paren {n \paren {-\gamma + \sum_{k \mathop = 1}^\infty \paren {\frac 1 k - \frac 1 {n z + k - 1} } } - \paren {-\gamma + \sum_{k \mathop = 1}^\infty \paren {\frac 1 k - \frac 1 {z + k - 1} } } } - n \ln n\)





Reciprocal times Derivative of Gamma Function














\(\ds \)

\(=\)







\(\ds -\paren {n - 1} \gamma + \lim_{z \mathop \to 0} \paren {n \paren {\sum_{k \mathop = 1}^\infty \paren {\frac 1 k - \frac 1 {n z + k - 1} } } - \paren {\sum_{k \mathop = 1}^\infty \paren {\frac 1 k - \frac 1 {z + k - 1} } } } - n \ln n\)




















\(\ds \)

\(=\)







\(\ds -\paren {n - 1} \gamma + \lim_{z \mathop \to 0} \paren {\paren {\paren {\frac n 1 - \frac n {n z} } + \paren {\frac n 2 - \frac n {n z + 1} } + \paren {\frac n 3 - \frac n {n z + 2} } + \cdots } - \paren {\paren {\frac 1 1 - \frac 1 z} + \paren {\frac 1 2 - \frac 1 {z + 1} } + \paren {\frac 1 3 - \frac 1 {z + 2} } + \cdots } } - n \ln n\)




















\(\ds \)

\(=\)







\(\ds -\paren {n - 1} \gamma + \paren {\paren {\frac n 1 - \frac 1 0} + \paren {\frac n 2 - \frac n 1} + \paren {\frac n 3 - \frac n 2} + \cdots} - \paren {\paren {\frac 1 1 - \frac 1 0} + \paren {\frac 1 2 - \frac 1 1} + \paren {\frac 1 3 - \frac 1 2} + \cdots} - n \ln n\)




















\(\ds \)

\(=\)







\(\ds -\paren {n - 1} \gamma - n \ln n\)









$\blacksquare$


Sources
1985: Bruce C. Berndt: Ramanujan's Notebooks: Part I: Chapter $8$. Analogues of the Gamma Function




