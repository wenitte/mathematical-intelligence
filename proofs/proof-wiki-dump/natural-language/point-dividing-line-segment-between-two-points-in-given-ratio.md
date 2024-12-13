# 

Source: https://proofwiki.org/wiki/Point_dividing_Line_Segment_between_Two_Points_in_Given_Ratio



Theorem
Let $A$ and $B$ be points whose position vectors relative to an origin $O$ of a Euclidean space are $\mathbf a$ and $\mathbf b$.
Let $\mathbf r$ be the position vector of a point $R$ on $AB$ which divides $AB$ in the ratio $m : n$.


Then:

$\mathbf r = \dfrac {n \mathbf a + m \mathbf b} {m + n}$


Proof 1
We have that:

$\vec {A B} = \mathbf b - \mathbf a$
and so:

$\vec {A R} = \dfrac m {m + n} \paren {\mathbf b - \mathbf a}$
Hence the position vector $\mathbf r$ of $R$ is given by:














\(\ds \mathbf r\)

\(=\)







\(\ds \vec {O R}\)




















\(\ds \)

\(=\)







\(\ds \vec {O A} + \vec {A R}\)




















\(\ds \)

\(=\)







\(\ds \mathbf a + \dfrac m {m + n} \paren {\mathbf b - \mathbf a}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {n \mathbf a + m \mathbf b} {m + n}\)









$\blacksquare$


Proof 2
Let the coordinates of $A$ be $\tuple {x_1, y_1}$.
Let the coordinates of $B$ be $\tuple {x_2, y_2}$.
Let the coordinates of $R$ be $\tuple {X, Y}$.
Then we have:

$\dfrac {x_2 - X} {X - x_1} = \dfrac n m$
and so:

$X \paren {m + n} = m x_2 + n x_1$

Similarly for $Y$, giving $R$ as:

$\tuple {\dfrac {m x_2 + n x_1} {m + n}, \dfrac {m y_2 + n y_1} {m + n} }$
The result follows.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): division in a given ratio: 2.
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): division in a given ratio: 2.




