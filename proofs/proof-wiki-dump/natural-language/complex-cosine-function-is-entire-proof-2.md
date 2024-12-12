# 

Source: https://proofwiki.org/wiki/Complex_Cosine_Function_is_Entire/Proof_2

Theorem
Let $\cos: \C \to \C$ be the complex cosine function. 
Then $\cos$ is entire. 


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

$\dfrac 1 2 \paren {f \circ g + f \circ h}$
is entire.

Then: 














\(\ds \frac 1 2 \paren {\map {\paren {f \circ g} } z + \map {\paren {f \circ h} } z}\)

\(=\)







\(\ds \frac 1 2 \paren {\map \exp {i z} + \map \exp {-i z} }\)




















\(\ds \)

\(=\)







\(\ds \cos z\)





Euler's Cosine Identity



Therefore $\cos$ is an entire function.
$\blacksquare$





