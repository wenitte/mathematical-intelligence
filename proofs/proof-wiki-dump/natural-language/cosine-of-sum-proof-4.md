# 

Source: https://proofwiki.org/wiki/Cosine_of_Sum/Proof_4

Theorem
$\map \cos {a + b} = \cos a \cos b - \sin a \sin b$


Proof

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Diagram could do with a redesignYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


$AB$, $AC$, $AE$, and $AD$ are radii of the circle centered at $A$.
Let $\angle BAC = a$ and $\angle DAC = \angle BAE = b$.
By Euclid's First Postulate, we can construct line segments $BD$ and $CE$.
By Euclid's second common notion, $\angle DAB = \angle CAE$.
Thus by Triangle Side-Angle-Side Congruence, $\triangle DAB \cong \triangle CAE$.
Therefore, $DB = CE$.

We now assign Cartesian coordinates to the points $B$, $C$, $D$, and $E$:














\(\ds B\)

\(=\)







\(\ds \tuple {1, 0}\)




















\(\ds C\)

\(=\)







\(\ds \tuple {\cos a, \sin a}\)




















\(\ds D\)

\(=\)







\(\ds \tuple {\map \cos {a + b}, \map \sin {a + b} }\)




















\(\ds E\)

\(=\)







\(\ds \tuple {\cos b, -\sin b}\)





Cosine Function is Even and Sine Function is Odd




We use the definition of the distance function on the Euclidean space $\struct {\R^2, d}$ as defined by the Euclidean metric:

$\forall x, y \in \R^2: \map d {x, y} = \sqrt {\paren {x_1 - x_2}^2 + \paren {y_1 - y_2}^2}$
where $x = \tuple {x_1, y_1}, y = \tuple {x_2, y_2}$.

Thus:

$DB \cong CE \iff \map d {D, B} = \map d {C, E}$

So, plugging in the coordinates of $B, C, D, E$, we get:














\(\ds \paren {\map \cos {a + b} } - 1)^2 + \map {\sin^2} {a + b}\)

\(=\)







\(\ds \paren {\cos a - \cos b}^2 + \paren {\sin a + \sin b}^2\)














\(\ds \leadsto \ \ \)





\(\ds \cos^2 \left({a + b}\right) + \sin^2 \left({a + b}\right)\)

\(\)







\(\ds \)





multiplying out left hand side














\(\ds {} - 2 \, \map \cos {a + b} + 1\)

\(=\)







\(\ds \paren {\cos a - \cos b}^2 + \paren {\sin a + \sin b}^2\)














\(\ds \leadsto \ \ \)





\(\ds 1 - 2 \, \map \cos {a + b} + 1\)

\(=\)







\(\ds \paren {\cos a - \cos b}^2 + \paren {\sin a + \sin b}^2\)





Sum of Squares of Sine and Cosine








\(\ds \leadsto \ \ \)





\(\ds 2 - 2 \, \map \cos {a + b}\)

\(=\)







\(\ds \cos^2 a - 2 \cos a \cos b + \cos^2 b\)





multiplying out right hand side














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \sin^2 a + 2 \sin a \sin b + \sin^2 b\)














\(\ds \leadsto \ \ \)





\(\ds 2 - 2 \, \map \cos {a + b}\)

\(=\)







\(\ds 2 - 2 \cos a \cos b + 2 \sin a \sin b\)





Sum of Squares of Sine and Cosine








\(\ds \leadsto \ \ \)





\(\ds \map \cos {a + b}\)

\(=\)







\(\ds \cos a \cos b - \sin a \sin b\)









$\blacksquare$





