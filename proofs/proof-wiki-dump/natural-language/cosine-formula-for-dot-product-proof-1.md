# 

Source: https://proofwiki.org/wiki/Cosine_Formula_for_Dot_Product/Proof_1



Theorem
Let $\mathbf v, \mathbf w$ be two non-zero vectors in $\R^n$.
The dot product of $\mathbf v$ and $\mathbf w$ can be calculated by:

$\mathbf v \cdot \mathbf w = \norm {\mathbf v} \norm {\mathbf w} \cos \theta$
where:

$\norm {\, \cdot \,}$ denotes vector length and
$\theta$ is the angle between $\mathbf v$ and $\mathbf w$.


Proof
There are two cases:

$(1): \quad \mathbf v$ and $\mathbf w$ are not scalar multiples of each other
$(2): \quad \mathbf v$ and $\mathbf w$ are scalar multiples of each other.


Case 1

Let the two vectors $\mathbf v$ and $\mathbf w$ not be scalar multiples of each other. 
Then by the definition of angle between vectors, we have $\theta$ defined as in the triangle as shown above.
(Note that from Angle Between Non-Zero Vectors Always Defined, such a triangle is guaranteed to exist).
By the Law of Cosines:

$\norm {\mathbf v - \mathbf w}^2 = \norm {\mathbf w}^2 + \norm {\mathbf v}^2 - 2 \norm {\mathbf v} \norm {\mathbf w} \cos \theta$
Now, observe that:














\(\ds \norm {\mathbf v - \mathbf w}^2\)

\(=\)







\(\ds \paren {\mathbf v - \mathbf w} \cdot \paren {\mathbf v - \mathbf w}\)





Dot Product of Vector with Itself














\(\ds \)

\(=\)







\(\ds \mathbf v \cdot \mathbf v - 2 \paren {\mathbf v \cdot \mathbf w} + \mathbf w \cdot \mathbf w\)





Properties of Dot Product














\(\ds \)

\(=\)







\(\ds \norm {\mathbf v}^2 + \norm {\mathbf w}^2 - 2 \paren {\mathbf v \cdot \mathbf w}\)





Dot Product of Vector with Itself




Equating these two expressions for $\norm {\mathbf v - \mathbf w}^2$ gives:














\(\ds \norm {\mathbf w}^2 + \norm {\mathbf v}^2 - 2 \norm {\mathbf v} \norm {\mathbf w} \cos \theta\)

\(=\)







\(\ds \norm {\mathbf v}^2 + \norm {\mathbf w}^2 - 2 \paren {\mathbf v \cdot \mathbf w}\)




















\(\ds -2 \paren {\norm {\mathbf v} \norm {\mathbf w} \cos \theta}\)

\(=\)







\(\ds -2 \paren {\mathbf v \cdot \mathbf w}\)




















\(\ds \norm {\mathbf v} \norm {\mathbf w} \cos \theta\)

\(=\)







\(\ds \mathbf v \cdot \mathbf w\)









which is exactly the desired result.
$\Box$


Case 2
Let $\mathbf v = \paren {v_1, v_2, \ldots, v_n}$ and $\mathbf w = \paren {w_1, w_2, \ldots, w_n}$.
Without loss of generality, let $\mathbf v = c \mathbf w$, where $c$ is some scalar. 
If $c > 0$, then by the definition of angle between vectors:

$\theta = 0 \implies \cos \theta = 1$
If $c < 0$, then by the definition of angle between vectors:

$\theta = \pi \implies \cos \theta = -1$
(Note that $c$ cannot be $0$ because we have stipulated $\mathbf v$ and $\mathbf w$ to be non-zero).
Then:














\(\ds \mathbf v \cdot \mathbf w\)

\(=\)







\(\ds \paren {c \mathbf w} \cdot \mathbf w\)




















\(\ds \)

\(=\)







\(\ds c \paren {\mathbf w \cdot \mathbf w}\)





Properties of Dot Product














\(\ds \)

\(=\)







\(\ds c \paren {\norm {\mathbf w}^2}\)





Dot Product of Vector with Itself














\(\ds \)

\(=\)







\(\ds \paren {c \norm {\mathbf w} } \norm {\mathbf w}\)




















\(\ds \)

\(=\)







\(\ds c \sqrt {\sum_{i \mathop = 1}^n w_i^2} \norm {\mathbf w}\)





Definition of Vector Length in $\R^n$














\(\ds \)

\(=\)







\(\ds \sgn \paren c \sqrt{c^2 \sum_{i \mathop = 1}^n w_i^2} \norm {\mathbf w}\)





where $\sgn \paren c$ is the signum function, that is the algebraic sign of $c$














\(\ds \)

\(=\)







\(\ds \sgn \paren c \sqrt {\sum_{i \mathop = 1}^n \paren {c w_i}^2} \norm {\mathbf w}\)




















\(\ds \)

\(=\)







\(\ds \sgn \paren c \sqrt {\sum_{i \mathop = 1}^n v_i^2} \norm {\mathbf w}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \sgn \paren c \norm {\mathbf v} \norm {\mathbf w}\)





Definition of $\norm {\mathbf u}$














\(\ds \)

\(=\)







\(\ds \norm {\mathbf v} \norm {\mathbf w} \cos \theta\)





$\sgn \paren c = \cos \theta$



$\blacksquare$


Sources
For a video presentation of the contents of this page, visit the Khan Academy.




