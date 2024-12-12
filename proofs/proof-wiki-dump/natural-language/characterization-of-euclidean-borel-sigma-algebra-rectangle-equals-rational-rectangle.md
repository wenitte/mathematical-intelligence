# 

Source: https://proofwiki.org/wiki/Characterization_of_Euclidean_Borel_Sigma-Algebra/Rectangle_equals_Rational_Rectangle

Theorem
Let $\JJ_{ho}^n$ be the collection of half-open rectangles in $\R^n$.
Let $\JJ^n_{ho, \text{rat} }$ be the collection of half-open rectangles in $\R^n$ with rational endpoints.

Then:

$\map \sigma {\JJ_{ho}^n} = \map \sigma {\JJ^n_{ho, \text{rat} } }$
where $\sigma$ denotes generated $\sigma$-algebra.


Proof
From Generated Sigma-Algebra Preserves Subset:

$\map \sigma {\JJ_{ho, \text{rat} }^n} \subseteq \map \sigma {\JJ_{ho}^n}$

For the converse, it will suffice to show:

$\JJ_{ho}^n \subseteq \map \sigma {\JJ_{ho, \text{rat} }^n}$
by definition of generated $\sigma$-algebra.

So, let $\horectr {\mathbf a} {\mathbf b}$ be a half-open $n$-rectangle.

Let $\sequence {\mathbf a_m}_{m \mathop \in \N}$ be a sequence in $\Q^n$ with limit $\mathbf a$.
Also, let this sequence be such that $m_1 > m_2 \implies \mathbf a_{m_1} > \mathbf a_{m_2}$, in the component-wise ordering.
Also, choose $\mathbf b' \in \Q^n$ such that $\mathbf b' > \mathbf b$, again in the component-wise ordering.

Then, for any $m \in \N$:

$\horectr {\mathbf a_m} {\mathbf b'} \in \JJ_{ho, \text{rat} }^n$
By Sigma-Algebra Closed under Countable Intersection, it follows that:

$\ds \bigcap_{m \mathop \in \N} \horectr {\mathbf a_m} {\mathbf b'} \in \map \sigma {\JJ_{ho, \text{rat} }^n}$

Now observe, for $\mathbf x \in \R^n$:














\(\ds \mathbf x\)

\(\in\)







\(\ds \bigcap_{m \mathop \in \N} \horectr {\mathbf a_m} {\mathbf b'}\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall m \in \N: \, \)



\(\ds \mathbf x\)

\(\in\)







\(\ds \horectr {\mathbf a_m} {\mathbf b'}\)





Definition of Set Intersection








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall m \in \N: \, \)



\(\ds \mathbf x\)

\(\ge\)







\(\ds \mathbf a_m\)





Definition of Half-Open Rectangle












\(\, \ds \land \, \)

\(\ds \mathbf x\)

\(<\)







\(\ds \mathbf b'\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \mathbf x\)

\(\ge\)







\(\ds \mathbf a\)





$\sequence {\mathbf a_m}_{m \mathop \in \N}$ is increasing with limit $\mathbf a$












\(\, \ds \land \, \)

\(\ds \mathbf x\)

\(<\)







\(\ds \mathbf b'\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \mathbf x\)

\(\in\)







\(\ds \horectr {\mathbf a} {\mathbf b'}\)





Definition of Half-Open Rectangle




Next, let $\sequence {\mathbf b_m}_{m \mathop \in \N}$ be an increasing sequence in $\Q^n$ with limit $\mathbf b$.
Also, let $\mathbf a' \in \Q^n$ be such that $\mathbf a' < \mathbf a$.
Again, it follows that $\horectr {\mathbf a'} {\mathbf b_m} \in \JJ_{ho, \text{rat} }^n$.
Thus, by the third axiom for a $\sigma$-algebra:

$\ds \bigcup_{m \mathop \in \N} \horectr {\mathbf a'} {\mathbf b_m} \in \map \sigma {\JJ^n_{ho} }$

Similar to the above approach, for any $\mathbf x \in \R^n$:














\(\ds \mathbf x\)

\(\in\)







\(\ds \bigcup_{m \mathop \in \N} \horectr {\mathbf a'} {\mathbf b_m}\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \exists m \in \N: \, \)



\(\ds \mathbf x\)

\(\in\)







\(\ds \horectr {\mathbf a'} {\mathbf b_m}\)





Definition of Set Union








\(\ds \leadstoandfrom \ \ \)

\(\ds \exists m \in \N: \, \)



\(\ds \mathbf x\)

\(<\)







\(\ds \mathbf b_m\)





Definition of Half-Open Rectangle












\(\, \ds \land \, \)

\(\ds \mathbf x\)

\(\ge\)







\(\ds \mathbf a'\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \mathbf x\)

\(<\)







\(\ds \mathbf b\)





$\sequence {\mathbf b_m}_{m \mathop \in \N}$ is increasing with limit $\mathbf b$












\(\, \ds \land \, \)

\(\ds \mathbf x\)

\(\ge\)







\(\ds \mathbf a'\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \mathbf x\)

\(\in\)







\(\ds \horectr {\mathbf a'} {\mathbf b}\)





Definition of Half-Open Rectangle



Hence, it follows that:

$\ds \bigcup_{m \mathop \in \N} \horectr {\mathbf a'} {\mathbf b_m} = \horectr {\mathbf a'} {\mathbf b}$
whence the latter is in $\map \sigma {\JJ^n_{ho, \text{rat} } }$.

Hence by Sigma-Algebra Closed under Intersection:

$\horectr {\mathbf a} {\mathbf b'} \cap \horectr {\mathbf a'} {\mathbf b} \in \map \sigma {\JJ^n_{ho, \text{rat} } }$
and finally (the proof of) Half-Open Rectangles Closed under Intersection yields:

$\horectr {\mathbf a} {\mathbf b'} \cap \horectr {\mathbf a'} {\mathbf b} = \horectr {\mathbf a} {\mathbf b}$
since $\mathbf a' < \mathbf a$ and $\mathbf b < \mathbf b'$, thus finishing the proof.
$\blacksquare$





