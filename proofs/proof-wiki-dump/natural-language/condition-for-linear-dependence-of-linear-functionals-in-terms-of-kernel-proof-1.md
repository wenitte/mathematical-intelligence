# 

Source: https://proofwiki.org/wiki/Condition_for_Linear_Dependence_of_Linear_Functionals_in_terms_of_Kernel/Proof_1

Theorem
Let $V$ be a vector space over a field $\GF$.
Let $f, f_1, \ldots, f_n: V \to \GF$ be linear functionals.
Suppose that:

$\ds \bigcap_{i \mathop = 1}^n \ker f_i \subseteq \ker f$
where $\ker f$ denotes the kernel of $f$.

Then there exist $\alpha_1, \ldots, \alpha_n \in \GF$ such that:

$\ds \forall v \in V: \map f v = \sum_{i \mathop = 1}^n \alpha_i \map {f_i} v$
That is: 

$f \in \span \set {f_1, \ldots, f_n}$


Proof
For $i = 1, \ldots, n$, let $w_i$ be such that:

$w_i \not\in \ker f_i$
$w_i \in \ker f_j, j \ne i$
Suppose first that the $w_i$ all exist.
Let $v_i = \dfrac 1 {\map {f_i} {w_i} } w_i$.
Then since $f_i$ is linear:

$\map {f_i} {v_i} = 1$
Furthermore for $j \ne i$, $\map {f_j} {v_i} = 0$.
Now let $v \in V$ be arbitrary, and define:

$\ds w = v - \sum_{i \mathop = 1}^n \map {f_i} v v_i$
Then:














\(\ds \map {f_j} w\)

\(=\)







\(\ds \map {f_j} v - \sum_{i \mathop = 1}^n \map {f_i} v \map {f_j} {v_i}\)




















\(\ds \)

\(=\)







\(\ds \map {f_j} v - \map {f_j} v\)





$\map {f_i} {v_i} = 1, \map {f_j} {v_i} = 0$














\(\ds \)

\(=\)







\(\ds 0\)









Since $j$ was arbitrary, it follows from the premise on $f$ that:

$\map f w = 0$
That is to say:

$\ds 0 = \map f v - \sum_{i \mathop = 1}^n \map {f_i} v \map f {v_i}$
Setting $\alpha_i = \map f {v_i}$ we find:

$\ds \map f v = \sum_{i \mathop = 1}^n \alpha_i \map {f_i} v$
$\Box$

Now the case that such $w_i$ does not exist for a particular $i$.
Then:

$\ds \bigcap_{i \mathop = 1}^n \ker f_i = \bigcap_{j \mathop \ne i} \ker f_j$
and $\set{ f_j: j \ne i}$ fulfils the condition of the result.
The result for $f_1, \ldots, f_n$ follows by setting $\alpha_i = 0$.
$\blacksquare$





