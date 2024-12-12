# 

Source: https://proofwiki.org/wiki/Almost_Convergent_Sequence/Examples/Sequence_of_alternating_zeros_and_ones_converges_almost_to_one_half

Theorem
Let $\sequence {x_n}_{n \in \N}$ be the sequence defined by:

$x_n = \begin{cases} 0 & : n \equiv 0 \pmod 2 \\ 1 & : n \equiv 1 \pmod 2 \end{cases}$
where $\bmod$ denotes the congruence modulo.

Then $\sequence {x_n}_{n \in \N}$ almost converges to $1/2$.


Proof
Let $\phi$ be a Banach limit.
Let $S$ be the left shift operator on $\map {\ell^\infty} \R$.
Let $\mathbf 1 := \sequence {1, 1, 1, \ldots}$.
Then:














\(\ds \mathbf 1\)

\(=\)







\(\ds \sequence {1, 0, 1, 0, \ldots} + \sequence {0, 1, 0, 1, \ldots}\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \map S {\sequence {x_n} } + \sequence {x_n}\)









Thus by definition of Banach limit:














\(\ds 1\)

\(=\)







\(\ds \map \phi {\mathbf 1}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {\map S {\sequence {x_n} } + \sequence {x_n} }\)





by $(1)$














\(\ds \)

\(=\)







\(\ds \map \phi {\map S {\sequence {x_n} } } + \map \phi {\sequence {x_n} }\)




















\(\ds \)

\(=\)







\(\ds 2 \map \phi {\sequence {x_n} }\)









That is:

$\ds \map \phi {\sequence {x_n} } = \frac 1 2$
As $\phi$ is an arbitrary Banach limit, the claim follows.
$\blacksquare$


There is believed to be a mistake here, possibly a typo.In particular: categoryYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




