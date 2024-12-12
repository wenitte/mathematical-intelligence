# 

Source: https://proofwiki.org/wiki/Complex_Sine_Function_is_Entire



Theorem
Let $\sin: \C \to \C$ be the complex sine function. 
Then $\sin$ is entire. 


Proof 1
By the definition of the complex sine function, $\sin$ admits a power series expansion about $0$: 

$\ds \sin z = \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {z^{2 n + 1} } {\paren {2 n + 1}!}$
By Complex Function is Entire iff it has Everywhere Convergent Power Series, to show that $\sin$ is entire it suffices to show that this series is everywhere convergent.
From Radius of Convergence from Limit of Sequence: Complex Case, it is sufficient to show that: 

$\ds \lim_{n \mathop \to \infty} \size {\frac {\paren {-1}^{n + 1} } {\paren {2 n + 3}!} \times \frac {\paren {2 n + 1}!} {\paren {-1}^n} } = 0$
We have: 














\(\ds \lim_{n \mathop \to \infty} \size {\frac {\paren {-1}^{n + 1} } {\paren {2 n + 3}!} \times \frac {\paren {2 n + 1}!} {\paren {-1}^n} }\)

\(=\)







\(\ds \size {-1} \lim_{n \mathop \to \infty} \size {\frac {\paren {2 n + 1}!} {\paren {2 n + 3} \paren {2 n + 2} \paren {2 n + 1}!} }\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\frac 1 {\paren {2 n + 3} \paren {2 n + 2} } }\)




















\(\ds \)

\(=\)







\(\ds 0\)









Hence the result.
$\blacksquare$


Proof 2
Let: 














\(\ds \map f z\)

\(=\)







\(\ds \exp z\)




















\(\ds \map g z\)

\(=\)







\(\ds i z\)




















\(\ds \map h z\)

\(=\)







\(\ds -i z\)









for all $z \in \C$. 

By Complex Exponential Function is Entire, we have that $f$ is entire. 
By Polynomial is Entire, we have that $g$ and $h$ are entire. 
Therefore, by Composition of Entire Functions is Entire, we have that both $f \circ g$ and $f \circ h$ are entire.
By Linear Combination of Entire Functions is Entire, we then have that: 

$\dfrac 1 {2 i} \paren {f \circ g - f \circ h}$
is entire.
Note that: 














\(\ds \frac 1 {2 i} \paren {\map {\paren {f \circ g} } z - \map {\paren {f \circ h} } z}\)

\(=\)







\(\ds \frac 1 {2 i} \paren {\map \exp {i z} - \map \exp {-i z} }\)




















\(\ds \)

\(=\)







\(\ds \sin z\)





Euler's Sine Identity



Therefore, $\sin$ is an entire function.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): entire function
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): entire function (integral function)




