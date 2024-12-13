# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Cosine_of_Root_over_Root



Theorem
$\laptrans {\dfrac {\cos \sqrt t} {\sqrt t} } = \sqrt {\dfrac \pi s} \, \map \exp {-\dfrac 1 {4 s} }$
where $\laptrans f$ denotes the Laplace transform of the function $f$.


Proof 1
Let $\map f t = \sin \sqrt t$.
Then:














\(\ds \map {f'} t\)

\(=\)







\(\ds \dfrac {\cos \sqrt t} {2 \sqrt t}\)




















\(\ds \map f 0\)

\(=\)







\(\ds 0\)









So:














\(\ds \laptrans {\map {f'} t}\)

\(=\)







\(\ds \dfrac 1 2 \laptrans {\dfrac {\cos \sqrt t} {\sqrt t} }\)




















\(\ds \)

\(=\)







\(\ds s \map F s - \map f 0\)





Laplace Transform of Derivative














\(\ds \)

\(=\)







\(\ds \dfrac {\sqrt \pi} {2 s^{1/2} } \map \exp {-\dfrac 1 {4 s} }\)





Laplace Transform of Sine of Root








\(\ds \leadsto \ \ \)





\(\ds \laptrans {\dfrac {\cos \sqrt t} {\sqrt t} }\)

\(=\)







\(\ds \sqrt {\dfrac \pi s} \map \exp {-\dfrac 1 {4 s} }\)









$\blacksquare$


Proof 2
Laplace Transform of Cosine of Root over Root/Proof 2

Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Laplace Transforms of Special Functions: $5$




