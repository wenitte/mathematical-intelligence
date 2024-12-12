# 

Source: https://proofwiki.org/wiki/Closure_of_Complement_of_Closure_is_Regular_Closed

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $A \subseteq S$ be a subset of $T$.
Let $A^-$ denote the closure of $A$ in $T$.
Let $A'$ denote the complement of $A$ in $S$: $A' = S \setminus A$.

Then $A^{-'-}$ is regular closed.


Proof
Let $A^\circ$ denote the interior of $A$.
From Set is Closed iff Equals Topological Closure, $A^-$ is closed in $T$.
Since $A^-$ is a closed set, $A^{-'}$ is open.
Therefore:

$\forall x \in A^{-'}: \exists \epsilon \in \R_{>0}$

prime.mover suggests: The validity of the material on this page is questionable.In particular: The above statement makes no sense in this contextYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Additionally, because $A^{-'}$ is the complement of $A^-$ relative to $S$, we have:

$\exists \epsilon \in \R_{>0}: \map {V_\epsilon} x \cap A^- = \O \iff x \in A^{-'}$

prime.mover suggests: The validity of the material on this page is questionable.In particular: The above $\map {V_\epsilon} x$ cannot be applied in the context of a general topological space. If it were stated that $T$ were a metric space, then maybe (with some further work to establish links to results to back the statement up), but it isn't so it can't.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Therefore, for $y: y \in A^{-'-}$ and $ y \notin A^{- '}$ we know that:

$\forall \epsilon \in \R_{>0}: \map {V_\epsilon} y \cap A^- \ne \O$
meaning that $y$ is a limit point of $A^-$.
Therefore:

$y \notin A^{-'-\circ}$
Now:

$x \in A^{-'-\circ} \iff x \in A^{-'}$

A specific link is needed here.In particular: the above statementYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by searching for it, and adding it here.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{LinkWanted}} from the code.
In conclusion, this means that:

$A^{-'-\circ-} = A^{-'-},$ verifying the definition of $A^{-'-}$ being  regular closed.
$\blacksquare$





