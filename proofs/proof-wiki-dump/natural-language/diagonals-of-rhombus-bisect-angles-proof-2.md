# 

Source: https://proofwiki.org/wiki/Diagonals_of_Rhombus_Bisect_Angles/Proof_2

Theorem
Let $OABC$ be a rhombus.
Then:

$(1): \quad OB$ bisects $\angle AOC$ and $\angle ABC$
$(2): \quad AC$ bisects $\angle OAB$ and $\angle OCB$



Proof
Without loss of generality, we will only prove $OB$ bisects $\angle AOC$.
Let the position vectors of $A$, $B$ and $C$ with respect to $O$ be $\mathbf a$, $\mathbf b$ and $\mathbf c$ respectively.
By definition of rhombus, we have:




\(\text {(a)}: \quad\)









\(\ds \mathbf a + \mathbf c\)

\(=\)







\(\ds \mathbf b\)





Parallelogram Law




\(\text {(b)}: \quad\)









\(\ds \norm {\mathbf a}\)

\(=\)







\(\ds \norm {\mathbf c}\)









From the above we have:














\(\ds \cos \angle \mathbf a, \mathbf b\)

\(=\)







\(\ds \frac {\mathbf a \cdot \mathbf b} {\norm {\mathbf a} \norm {\mathbf b} }\)





Definition of Dot Product














\(\ds \)

\(=\)







\(\ds \frac {\mathbf a \cdot \paren {\mathbf a + \mathbf c} } {\norm {\mathbf a} \norm {\mathbf b} }\)





from $(a)$ above: $\mathbf b = \mathbf a + \mathbf c$














\(\ds \)

\(=\)







\(\ds \frac {\mathbf a \cdot \mathbf a + \mathbf a \cdot \mathbf c} {\norm {\mathbf a} \norm {\mathbf b} }\)





Dot Product Distributes over Addition














\(\ds \)

\(=\)







\(\ds \frac { {\norm {\mathbf a} }^2 + \mathbf a \cdot \mathbf c} {\norm {\mathbf a} \norm {\mathbf b} }\)





Dot Product of Vector with Itself














\(\ds \)

\(=\)







\(\ds \frac { {\norm {\mathbf c} }^2 + \mathbf a \cdot \mathbf c} {\norm {\mathbf c} \norm {\mathbf b} }\)





from $(b)$ above: $\norm {\mathbf a} = \norm {\mathbf c}$














\(\ds \)

\(=\)







\(\ds \frac {\mathbf c \cdot \mathbf c + \mathbf a \cdot \mathbf c} {\norm {\mathbf c} \norm {\mathbf b} }\)





Dot Product of Vector with Itself














\(\ds \)

\(=\)







\(\ds \frac {\mathbf c \cdot \left({\mathbf a + \mathbf c}\right)} {\norm {\mathbf c} \norm {\mathbf b} }\)





Dot Product Distributes over Addition














\(\ds \)

\(=\)







\(\ds \frac {\mathbf c \cdot \mathbf b} {\norm {\mathbf c} \norm {\mathbf b} }\)





from $(a)$ above: $\mathbf b = \mathbf a + \mathbf c$














\(\ds \)

\(=\)







\(\ds \cos \angle \mathbf c, \mathbf b\)





Definition of Dot Product



By definition of dot product, the angle between the vectors is between $0$ and $\pi$.
From Shape of Cosine Function, cosine is injective on this interval.
Hence:

$\angle \mathbf a, \mathbf b = \angle \mathbf c, \mathbf b$
The result follows.
$\blacksquare$





