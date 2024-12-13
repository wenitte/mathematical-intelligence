# 

Source: https://proofwiki.org/wiki/Injection_from_Finite_Set_to_Itself_is_Surjection



Theorem
Let $S$ be a finite set.
Let $f: S \to S$ be an injection.

Then $f$ is also a surjection.


Corollary
Let $S$ be a finite set.
Let $f: S \to S$ be an injection.

Then $f$ is a permutation.


Proof
Let $a \in S$.
We need to show that there exists $b \in S$ such that $a = \map f b$.

Consider what happens when $f$ is applied repeatedly on $S$.
Let $f^2$ denote $f \circ f$ and, generally, $f^n := f \circ f^{n-1}$.
Consider the sequence of elements of $S$:

$a, \map f a, \map {f^2} a, \ldots$
Because $S$ is a finite set, there must be repetitions.
That is, there must exist $r, s \in \N$ such that:

$\map {f^r} a = \map {f^s} a$
where $r \ne s$.
Without loss of generality, assume $r > s$.
$f$ is an injection.
Therefore by Composite of Injections is Injection, $f^s$ is an injection.
By Injection iff Left Cancellable, $f^s$ is left cancellable.
Thus:














\(\ds \map {f^r} a\)

\(=\)







\(\ds \map {f^s} a\)














\(\ds \leadsto \ \ \)





\(\ds \map {f^s \circ f^{r - s} } a\)

\(=\)







\(\ds \map {f^s} a\)














\(\ds \leadsto \ \ \)





\(\ds \map {f^{r - s} } a\)

\(=\)







\(\ds a\)





Definition of Left Cancellable Mapping



That is, $b = \map {f^{r - s - 1} } a$.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $3$. Mappings: Exercise $8$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.3$: Mappings: Lemma $3$




