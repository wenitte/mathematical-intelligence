# 

Source: https://proofwiki.org/wiki/Scaling_Property_of_Dirac_Delta_Function

Theorem
Let $\map \delta t$ be the Dirac delta function.
Let $a$ be a non zero constant real number.
Then:

$\map \delta {a t} = \dfrac {\map \delta t} {\size a}$


Proof
The equation can be rearranged as:

$\size a \map \delta {a t} = \map \delta t$
We will check the definition of Dirac delta function in turn.

Definition of Dirac delta function:

$\paren 1:\map \delta t = \begin{cases}
+\infty & : t = 0 \\
0 & : \text{otherwise}
\end{cases}$

$\paren 2:\ds \int_{-\infty}^{+\infty} \map \delta t \rd t = 1$

$\paren 1:$














\(\ds \size a \map \delta {a t}\)

\(=\)







\(\ds \begin{cases} \paren {\size a} \paren {+\infty} & : a t = 0 \\
\paren {\size a} 0 & : \text{otherwise} \end{cases}\)






Definition of Dirac Delta Function








\(\ds \leadstoandfrom \ \ \)





\(\ds \size a \map \delta {a t}\)

\(=\)







\(\ds \begin{cases}
+\infty & : t = 0 \\
0 & : \text{otherwise}
\end{cases}\)






simplifying




$\paren 2:$
The proof of this part will be split into two parts, one for positive $a$ and one for negative $a$.

For $a > 0$:














\(\ds \int_{-\infty}^{+\infty} \size a \map \delta {a t} \rd t\)

\(=\)







\(\ds \int_{-\infty}^{+\infty} \size a \map \delta t \dfrac {\rd t} a\)





Substitute $t \mapsto \dfrac t a$














\(\ds \)

\(=\)







\(\ds \dfrac {\size a} a \int_{-\infty}^{+\infty} \map \delta t \rd t\)





Simplifying














\(\ds \)

\(=\)







\(\ds \dfrac a a \int_{-\infty}^{+\infty} \map \delta t \rd t\)





$a > 0$














\(\ds \)

\(=\)







\(\ds 1\)





Definition of Dirac Delta Function




$\Box$

For $a < 0$:














\(\ds \int_{-\infty}^{+\infty} \size a \map \delta {a t} \rd t\)

\(=\)







\(\ds \int_{+\infty}^{-\infty} \size a \map \delta t \dfrac {\rd t} a\)





Substitute $t \mapsto \dfrac t a$














\(\ds \)

\(=\)







\(\ds \dfrac {\size a} a \int_{+\infty}^{-\infty} \map \delta t \rd t\)





Simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {-\size a} a \int_{-\infty}^{+\infty} \map \delta t \rd t\)





Reversal of Limits of Definite Integral














\(\ds \)

\(=\)







\(\ds \dfrac a a \int_{-\infty}^{+\infty} \map \delta t \rd t\)





$a < 0$














\(\ds \)

\(=\)







\(\ds 1\)





Definition of Dirac Delta Function



$\Box$

Therefore, by definition, $\size a \map \delta {a t} = \map \delta t$.
The result follows after rearrangement.

$\blacksquare$


This article, or a section of it, needs explaining.In particular: Sorry, I'm going to have to ask the awkward question: can we link to a proof that: $\int_a^b \map f x \rd x = \int_a^b \map g x \rd x \implies f = g$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.




