# 

Source: https://proofwiki.org/wiki/Delta-Algebra_is_Sigma-Algebra

Theorem
Every $\delta$-algebra is a $\sigma$-algebra.


Proof
Let $\DD$ be a $\delta$-algebra whose unit is $\mathbb U$.
Let $A_1, A_2, \ldots$ be a countably infinite collection of elements of $\DD$.

Then:










\(\ds \forall i: \, \)



\(\ds \mathbb U \setminus A_i\)

\(\in\)







\(\ds \DD\)





$\DD$ is closed under relative complement with $\mathbb U$








\(\ds \leadsto \ \ \)





\(\ds \bigcap_{i \mathop = 1}^\infty \paren {\mathbb U \setminus A_i}\)

\(\in\)







\(\ds \DD\)





$\DD$ is closed under countable intersections








\(\ds \leadsto \ \ \)





\(\ds \mathbb U \setminus \bigcup_{i \mathop = 1}^\infty A_i\)

\(\in\)







\(\ds \DD\)





De Morgan's Laws: Complement of Union








\(\ds \leadsto \ \ \)





\(\ds \bigcup_{i \mathop = 1}^\infty A_i\)

\(\in\)







\(\ds \DD\)





$\DD$ is closed under relative complement with $\mathbb U$




Thus $\DD$ is also a $\sigma$-algebra.
$\blacksquare$


Also see
Sigma-Algebra is Delta-Algebra




