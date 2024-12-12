# 

Source: https://proofwiki.org/wiki/Cauchy%27s_Convergence_Criterion/Real_Numbers/Necessary_Condition



Theorem
Let $\sequence {x_n}$ be a sequence in $\R$.
Let $\sequence {x_n}$ be convergent.

Then $\sequence {x_n}$ is a Cauchy sequence.


Proof 1
Let $\sequence {x_n}$ be convergent.
Let $\struct {\R, d}$ be the metric space formed from $\R$ and the usual (Euclidean) metric:

$\map d {x_1, x_2} = \size {x_1 - x_2}$
where $\size x$ is the absolute value of $x$.
This is proven to be a metric space in Real Number Line is Metric Space.
From Convergent Sequence in Metric Space is Cauchy Sequence, we have that every convergent sequence in a metric space is a Cauchy sequence.
Hence $\sequence {x_n}$ is a Cauchy sequence.
$\blacksquare$


Proof 2
Let $\sequence {x_n}$ be a sequence in $\R$ that converges to the limit $l \in \R$.
Let $\epsilon > 0$. 
Then also $\dfrac \epsilon 2 > 0$.
Because $\sequence {x_n}$ converges to $l$, we have:

$\exists N: \forall n > N: \size {x_n - l} < \dfrac \epsilon 2$
So if $m > N$ and $n > N$, then:














\(\ds \size {x_n - x_m}\)

\(=\)







\(\ds \size {x_n - l + l - x_m}\)




















\(\ds \)

\(\le\)







\(\ds \size {x_n - l} + \size {l - x_m}\)





Triangle Inequality














\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \frac \epsilon 2\)





by choice of $N$














\(\ds \)

\(=\)







\(\ds \epsilon\)









Thus $\sequence {x_n}$ is a Cauchy sequence.
$\blacksquare$


Also known as
Cauchy's Convergence Criterion is also known as the Cauchy Convergence Condition.





