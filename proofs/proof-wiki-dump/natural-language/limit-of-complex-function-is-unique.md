# 

Source: https://proofwiki.org/wiki/Limit_of_Complex_Function_is_Unique

Theorem
Let $f: S \to \C$ be a complex function.
Let $z_0$ be a limit point of $S$.

Suppose that $\ds \lim_{z \mathop \to z_0} \map f z = L$.
Then that limit $L$ is unique.


Proof
Aiming for a contradiction, suppose $L' \ne L$ is another limit point of $\map f z$ at $z_0$.
Let us take $\epsilon = \dfrac {\cmod {L - L'} } 2$.
Then we can find $\delta_1 > 0, \delta_2 > 0$ such that:

$z \in S, 0 < \cmod {z - z_0} < \delta_1 \implies \cmod {\map f z - L} < \epsilon$
$z \in S, 0 < \cmod {z - z_0} < \delta_2 \implies \cmod {\map f z - L'} < \epsilon$
Because $z_0$ is a limit point:

$\exists z^* \in S: 0 < \cmod {z - z_0} < \min \set {\delta_1, \delta_2}$
Then:














\(\ds \cmod {L - L'}\)

\(=\)







\(\ds \cmod {L - \map f {z^*} + \map f {z^*} - L'}\)




















\(\ds \)

\(\le\)







\(\ds \cmod {L - \map f {z^*} } + \cmod {\map f {z^*} - L'}\)





Triangle Inequality














\(\ds \)

\(<\)







\(\ds \epsilon + \epsilon\)




















\(\ds \)

\(=\)







\(\ds 2 \epsilon\)









This contradicts the choice we made of $\epsilon$.
Hence the result by Proof by Contradiction.
$\blacksquare$


Work In ProgressIn particular: Expand the context to include the more general result for metric spaces etc.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.




