# 

Source: https://proofwiki.org/wiki/Principle_of_Recursive_Definition_for_Minimally_Inductive_Set

Theorem
Let $\omega$ be the minimally inductive set.
Let $T$ be a set.
Let $a \in T$.
Let $g: T \to T$ be a mapping.

Then there exists exactly one mapping $f: \omega \to T$ such that:

$\forall x \in \omega: \map f x = \begin {cases}
a & : x = \O \\
\map g {\map f n} & : x = n^+
\end {cases}$
where $n^+$ is the successor set of $n$.


Proof

The validity of the material on this page is questionable.In particular: The second principle of transfinite recursion that is linked to is not easily applicable to this situationYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Take the function $F$ generated in Second Principle of Transfinite Recursion.
Set $f = F {\restriction_\omega}$.














\(\ds \map f \O\)

\(=\)







\(\ds \map F \O\)





$\O \in \omega$














\(\ds \map f {n^+}\)

\(=\)







\(\ds \map F {n^+}\)





$n^+ \in \omega$














\(\ds \)

\(=\)







\(\ds \map g {\map F n}\)





Second Principle of Transfinite Recursion














\(\ds \)

\(=\)







\(\ds \map g {\map f n}\)





$n \in \omega$ and the definition of $f$



Therefore, such a function exists.

Now, suppose there are two functions $f$ and $f'$ that satisfy this:

$\map f \O = \map {f'} \O$

Then:














\(\ds \map f {n^+}\)

\(=\)







\(\ds \map g {\map f n}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \map g {\map {f'} n}\)





Inductive Hypothesis














\(\ds \)

\(=\)







\(\ds \map {f'} {n^+}\)





by hypothesis



This completes the proof.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 12$: The Peano Axioms




