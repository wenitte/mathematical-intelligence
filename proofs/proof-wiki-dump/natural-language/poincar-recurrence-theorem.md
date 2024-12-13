# 

Source: https://proofwiki.org/wiki/Poincar%C3%A9_Recurrence_Theorem



Theorem
Let $\struct {X, \BB, \mu, T}$ be a measure-preserving dynamical system.

Then for each $A \in \BB$:

$\ds \map \mu {A \setminus \bigcap_{N \mathop = 1}^\infty \bigcup_{n \mathop = N}^\infty T^{-n} \sqbrk A} = 0$
That is, for $\mu$-almost all $x\in A$ there are integers $0 < n_1 < n_2 < \cdots$ such that $\map {T^{n_i} }x \in A$.


Proof
Let:

$\ds A_\infty := \bigcap_{N \mathop = 1}^\infty \bigcup_{n \mathop = N}^\infty T^{-n} \sqbrk A$
For $N \in \N$, let:

$\ds A_N := \bigcup_{n \mathop = N}^\infty T^{-n} \sqbrk A$
so that:

$\ds A_\infty = \bigcap _{N \mathop = 1} ^\infty A_N$
Now, we need to show:

$\ds \map \mu {A \setminus A_\infty} = 0$

First, for all $N \in \N$:














\(\ds A_N\)

\(=\)







\(\ds \bigcup_{n \mathop = N}^\infty T^{-n} \sqbrk A\)




















\(\ds \)

\(\supseteq\)







\(\ds \bigcup_{n \mathop = N+1}^\infty T^{-n} \sqbrk A\)




















\(\ds \)

\(\supseteq\)







\(\ds A_{N + 1}\)










On the other hand, for all $N \in \N$:














\(\ds T^{-1} \sqbrk {A_N}\)

\(=\)







\(\ds T^{-1} \sqbrk {\bigcup_{n \mathop = N}^\infty T^{-n} \sqbrk A}\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{n \mathop = N}^\infty T^{-1} \sqbrk {T^{-n} \sqbrk A}\)





Preimage of Union under Mapping/Family of Sets














\(\ds \)

\(=\)







\(\ds \bigcup_{n \mathop = N+1}^\infty T^{-n} \sqbrk A\)




















\(\ds \)

\(=\)







\(\ds A_{N + 1}\)









Hence, because $T$ is a $\mu$-preserving transformation:

$\map \mu {A_N} = \map \mu {T^{-1} \sqbrk {A_N} } = \map \mu {A_{N + 1} }$

Therefore:














\(\ds \map \mu {A \setminus A_\infty}\)

\(\le\)







\(\ds \map \mu {A_0 \setminus A_\infty}\)





Measure is Monotone, $A \subseteq A_0$














\(\ds \)

\(=\)







\(\ds \map \mu {A_0 \setminus \bigcap_{N \mathop = 1}^\infty A_N}\)




















\(\ds \)

\(=\)







\(\ds \map \mu {\bigcup_{N \mathop = 1} ^\infty {A_0 \setminus A_N} }\)





De Morgan's Law














\(\ds \)

\(\le\)







\(\ds \sum_{N \mathop = 1}^\infty \map \mu {A_0 \setminus A_N}\)





Measure is Countably Subadditive














\(\ds \)

\(=\)







\(\ds \sum_{N \mathop = 1}^\infty \paren {\map \mu {A_0} - \map \mu {A_N} }\)





Measure of Set Difference with Subset














\(\ds \)

\(=\)







\(\ds 0\)









$\blacksquare$


Source of Name
This entry was named for Jules Henri Poincaré.


Sources
2011: Manfred Einsiedler and Thomas Ward: Ergodic Theory: with a view towards Number Theory Theorem $2.11$
1982: Peter Walters: An Introduction to Ergodic Theory Theorem $1.4$




