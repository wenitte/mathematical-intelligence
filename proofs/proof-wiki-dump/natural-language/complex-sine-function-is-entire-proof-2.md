# 

Source: https://proofwiki.org/wiki/Complex_Sine_Function_is_Entire/Proof_2

Theorem
Let $\sin: \C \to \C$ be the complex sine function. 
Then $\sin$ is entire. 


Proof
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





