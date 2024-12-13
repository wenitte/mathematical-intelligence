# 

Source: https://proofwiki.org/wiki/Linear_Combination_of_Complex-Valued_Functions_Vanishing_at_Infinity_Vanishes_at_Infinity

Theorem
Let $X$ be a locally compact Hausdorff space. 
Let $f, g : X \to \C$ be complex-valued functions vanishing at infinity.
Let $\lambda \in \C$.

Then $f + \lambda g$ vanishes at infinity.


Proof
If $\lambda = 0$, we are done immediately. 
Take $\lambda \ne 0$. 
Let $\epsilon > 0$. 
Since $f$ vanishes at infinity, there exists a compact set $F_1 \subseteq X$ such that:

$\cmod {\map f x} < \dfrac \epsilon 2$ for each $x \in X \setminus F_1$.
Since $g$ vanishes at infinity, there exists a compact set $F_2 \subseteq X$ such that:

$\cmod {\map g x} < \dfrac \epsilon {2 \cmod \lambda}$ for each $x \in X \setminus F_2$.
From Union of Two Compact Sets is Compact, $F_1 \cup F_2$ is compact and:

$\cmod {\map f x} < \dfrac \epsilon 2$ and $\cmod {\map g x} < \dfrac \epsilon {2 \cmod \lambda}$ for each $x \in X \setminus \paren {F_1 \cup F_2}$.
Then, we have for $x \in X \setminus \paren {F_1 \cup F_2}$:














\(\ds \cmod {\map f x + \lambda \map g x}\)

\(\le\)







\(\ds \cmod {\map f x} + \cmod \lambda \cmod {\map g x}\)





Triangle Inequality for Complex Numbers














\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \cmod \lambda \paren {\frac \epsilon {2 \cmod \lambda} }\)




















\(\ds \)

\(=\)







\(\ds \frac \epsilon 2 + \frac \epsilon 2\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









Since again $F_1 \cup F_2$ is compact, we have that $f + \lambda g$ vanishes at infinity.
$\blacksquare$





