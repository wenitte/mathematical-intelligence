# 

Source: https://proofwiki.org/wiki/Compact_Convex_Set_with_Nonempty_Interior_is_Homeomorphic_to_Cone_on_Boundary



Theorem
Let $n \in \N_{> 0}$.
Let $T \subseteq \R^n$ be a compact convex subset of real Euclidean $n$-space.
Suppose the interior of $T$ is non-empty.
Then, $T$ is homeomorphic to the cone on its boundary.


Proof
Let $\bsx_0 \in T^\circ$ be an interior point of $T$.
Let $C \partial T$ denote the cone on the boundary of $T$.
Define $\phi : C \partial T \to T$ as:

$\map \phi {\eqclass {\tuple {e, \bsx, t}} \RR} = t \bsx + \paren {1 - t} \bsx_0$
where:

$e$ is the unique element of the trivial topological space used in the construction of the cone.
$\RR$ is the equivalence relation used to define the join
For $\phi$ to be well-defined, it is necessary that if:

$\tuple {\tuple {e, \bsx, t}, \tuple {e', \bsx', t'}} \in \RR$
then:

$t \bsx + \paren {1 - t} \bsx_0 = t' \bsx' + \paren {1 - t'} \bsx_0$
By definition of join, the hypothesis implies that one of:

$t = t' = 0$ and $e = e'$
$t = t' \in \openint 0 1$ and $\tuple {e, \bsx, t} = \tuple {e', \bsx', t'}$
$t = t' = 1$ and $\bsx = \bsx'$
is true.
If the first holds, then:

$t \bsx + \paren {1 - t} \bsx_0 = \bsx_0 = t' \bsx' + \paren {1 - t'} \bsx_0$
If the second holds, then:

$e = e'$
$\bsx = \bsx'$
$t = t'$
and the equality holds trivially.
If the third holds, then:

$t \bsx + \paren {1 - t} \bsx_0 = \bsx = \bsx' = t' \bsx' + \paren {1 - t'} \bsx_0$
Thus, in every case, $\phi$ is well-defined.


Bijection
Next, we will show that $\phi$ is a bijection.
Let $\bsy \in T$ be arbitrary.
If $\bsy = \bsx_0$, then clearly:

$\map \phi {\eqclass {\tuple {e, \bsx, t}} \RR} = \bsx_0 \iff t = 0$
which is unique by definition of $\RR$ and of trivial topological space.
Therefore, suppose $\bsy \ne \bsx_0$.
Then, by Ray from Interior of Compact Convex Set Meets Boundary Exactly Once, there is a unique $t > 0$ such that:

$\bsx_0 + t \paren {\bsy - \bsx_0} \in \partial T$
Let $\bsx = \bsx_0 + t \paren {\bsy - \bsx_0} \in \partial T$.
Thus:














\(\ds t \bsy\)

\(=\)







\(\ds \bsx - \bsx_0 + t \bsx_0\)














\(\ds \leadsto \ \ \)





\(\ds \bsy\)

\(=\)







\(\ds \frac 1 t \bsx + \paren {1 - \frac 1 t} \bsx_0\)









Furthermore, if some $\bsx' \in \partial T$ and $t' > 0$ satisfies:

$\bsy = t' \bsx' + \paren {1 - t'} \bsx_0$
we get:














\(\ds t' \bsx'\)

\(=\)







\(\ds \bsy + \paren {t' - 1} \bsx_0\)














\(\ds \leadsto \ \ \)





\(\ds \bsx'\)

\(=\)







\(\ds \frac 1 {t'} \bsy + \paren {1 - \frac 1 {t'} } \bsx_0\)




















\(\ds \)

\(=\)







\(\ds \bsx_0 + \frac 1 {t'} \paren {\bsy - \bsx_0}\)




















\(\ds \)

\(\in\)







\(\ds \partial T\)





Definition of $\bsx'$








\(\ds \leadsto \ \ \)





\(\ds t\)

\(=\)







\(\ds \frac 1 {t'}\)





Uniqueness of $t$








\(\ds \leadsto \ \ \)





\(\ds \bsx'\)

\(=\)







\(\ds \bsx\)









It remains to show that $\dfrac 1 t \in \hointl 0 1$.
By Ray from Bounded Set Meets Boundary, there exists some $s \ge 0$ such that:

$\bsy + s \paren {\bsx - \bsx_0} \in \partial T$
Therefore:

$\dfrac 1 t \bsx + \paren {1 - \dfrac 1 t} \bsx_0 + s \paren {\bsx - \bsx_0} \in \partial T$
That is:

$\bsx_0 + \paren {\dfrac 1 t + s} \paren {\bsx - \bsx_0} \in \partial T$
By Ray from Interior of Compact Convex Set Meets Boundary Exactly Once, there is a unique $u > 0$ such that:

$\bsx_0 + u \paren {\bsx - \bsx_0} \in \partial T$
Since $\dfrac 1 t + s > 0$:

$\dfrac 1 t + s = u$
As clearly $u = 1$ satisfies:

$\bsx_0 + u \paren {\bsx - \bsx_0} = \bsx \in \partial T$
We have:

$\dfrac 1 t + s = 1$
Therefore:

$\dfrac 1 t \le 1$

Thus, for every $\bsy \in T$ with $\bsy \ne \bsx_0$, there is a unique $\dfrac 1 t$ and $\bsx$ such that:

$\map \phi {\eqclass {\tuple {e, \bsx, \dfrac 1 t} } \RR} = \bsy$
Combined with the case $\bsy = \bsx_0$ above, we get that:

$\phi$ is a bijection
$\Box$

Continuity
The last step is to prove that $\phi$ is continuous.
Let $X = \eqclass {\tuple {e, \bsx, t}} \RR$ be arbitrary, where $\bsx \in \partial T$ and $t \in \closedint 0 1$.
Let $N$ be a neighborhood of $\map \phi X$.
By definition, there is some open ball:

$\map {B_\epsilon} {\map \phi X} \subseteq N$
We will separately examine the cases of $t = 0$ and $t > 0$.

If $t = 0$, then $\map \phi X = \bsx_0$.
By defining the continuous mapping $\psi : \partial T \to \R_{\ge 0}$ as:

$\map \psi \bsz = \norm {\bsz - \bsx_0}$
and applying:

Boundary of Compact Set in Hausdorff Space is Compact
Continuous Image of Compact Space is Compact
Compact Subspace of Metric Space is Bounded
we have that:

$\set {\norm {\bsz - \bsz_0} : \bsz \in \partial T}$
is bounded above.
Let $\delta = \dfrac \epsilon {\sup_{\bsz \in \partial T} \norm {\bsz - \bsx_0}}$
Then, for any $\bsz \in \partial T$ and $t \in \hointr 0 \delta$:














\(\ds \norm {\map \phi {\eqclass {\tuple {e, \bsz, t} } \RR } - \bsx_0}\)

\(=\)







\(\ds \norm {t \bsz + \paren {1 - t} \bsx_0 - \bsx_0}\)




















\(\ds \)

\(=\)







\(\ds t \norm {\bsz - \bsx_0}\)




















\(\ds \)

\(<\)







\(\ds \delta \norm {\bsz - \bsx_0}\)





Assumption on $t$














\(\ds \)

\(\le\)







\(\ds \delta \sup_{\bsz \in T} \norm {\bsz - \bsx_0}\)





Definition of Supremum of Subset of Real Numbers














\(\ds \)

\(=\)







\(\ds \epsilon\)





Definition of $\delta$



We have shown that the image of:

$A_\delta = \set {\eqclass {\tuple {e, \bsz, t}} \RR : \bsz \in \partial T \land t \in \hointr 0 \delta}$
under $\phi$ is a subset of $\map {B_\epsilon} {\map \phi X}$, itself, a subset of $N$.
Thus, we only need to show that $A_\delta$ is a neighborhood of $\bsx_0$ in $C \partial T$.

We have that $\set e \times \partial T \times \hointr 0 \delta$ is open in the product space underlying the join operation.

This is by definition, since it is exactly $\pr_3^{-1} \hointr 0 \delta$
But then $A_\delta$ is open in $C \partial T$, by definition of quotient topology.
$\Box$
Suppose $t > 0$.
Then, $\norm {\map \phi X - \bsx_0} > 0$.
By replacing $\epsilon$ with $\map \min {\epsilon, \norm {\map \phi X - \bsx_0}}$, we can ensure:

$\map {B_\epsilon} {\map \phi X} \subseteq N \setminus \set \bszero$
Now, let:

$\delta = \dfrac \epsilon 2$
$\delta' = \dfrac \epsilon {2 \sup_{\bsz \in \partial T} \norm {\bsz - \bsx_0}}$
We will consider:

$R = \set e \times \paren {\map {B_\delta} \bsx \cap \partial T} \times \paren {\openint {t - \delta'} {t + \delta'} \cap \closedint 0 1}$
which is open in:

$\set e \times \partial T \times \closedint 0 1$
by the definitions of the subspace and product topologies.
Furthermore, as $t - \delta' > 0$, we have:

$R = q_\RR^{-1} \sqbrk {q_\RR \sqbrk R}$
Therefore, $q_\RR \sqbrk R$ is open in $C \partial T$ by definition of quotient topology.
It remains to show that:

$\phi \sqbrk {q_\RR \sqbrk R} \subseteq \map {B_\epsilon} X$
We have:










\(\ds \forall \eqclass {e, \bsx', t'} \RR \in q_\RR \sqbrk R: \, \)



\(\ds \norm {\map \phi {\eqclass {e, \bsx', t'} \RR} - \map \phi {\eqclass {e, \bsx, t} \RR} }\)

\(=\)







\(\ds \norm {\paren {t' \bsx' + \paren {1 - t'} \bsx_0} - \paren {t \bsx + \paren {1 - t} \bsx_0} }\)




















\(\ds \)

\(=\)







\(\ds \norm {t' \paren {\bsx' - \bsx} + \paren {t' - t} \paren {\bsx - \bsx_0} }\)




















\(\ds \)

\(\le\)







\(\ds \size {t'} \norm {\bsx' - \bsx} + \size {t' - t} \norm {\bsx - \bsx_0}\)




















\(\ds \)

\(<\)







\(\ds \size {t'} \delta + \delta' \norm {\bsx - \bsx_0}\)




















\(\ds \)

\(\le\)







\(\ds \delta + \delta' \sup_{\bsz \in \partial T} \norm {\bsz - \bsx_0}\)





$t' \in \closedint 0 1$














\(\ds \)

\(=\)







\(\ds \frac \epsilon 2 + \frac \epsilon 2\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









Therefore:

$\phi \sqbrk {q_\RR \sqbrk R} \subseteq \map {B_\epsilon} X$
$\Box$

Therefore, $\phi$ is continuous by definition.
$\Box$

By:

Boundary of Compact Set in Hausdorff Space is Compact
Cone on Compact Space is Compact
the domain of $\phi$ is compact.
By Subspace of Hausdorff Space is Hausdorff, the codomain of $\phi$ is Hausdorff.
By Continuous Bijection from Compact to Hausdorff is Homeomorphism:

$\phi$ is a homeomorphism from $C \partial T$ to $T$.
$\blacksquare$





