# 

Source: https://proofwiki.org/wiki/Product_of_Sums_of_Four_Squares



Theorem
Let $a, b, c, d, w, x, y, z$ be numbers.
Then:














\(\ds \)

\(\)







\(\ds \left({a^2 + b^2 + c^2 + d^2}\right) \left({w^2 + x^2 + y^2 + z^2}\right)\)




















\(\ds =\)

\(\)







\(\ds \left({a w + b x + c y + d z}\right)^2\)




















\(\ds \)

\(+\)







\(\ds \left({a x - b w + c z - d y}\right)^2\)




















\(\ds \)

\(+\)







\(\ds \left({a y - b z - c w + d x}\right)^2\)




















\(\ds \)

\(+\)







\(\ds \left({a z + b y - c x - d w}\right)^2\)











Corollary
Let $a_1, a_2, \ldots, a_n, b_1, b_2, \ldots, b_n, c_1, c_2, \ldots, c_n, d_1, d_2, \ldots, d_n$ be integers.
Then:

$\ds \exists w, x, y, z \in \Z: \prod_{j \mathop = 1}^n \paren {a_j^2 + b_j^2 + c_j^2 + d_j^2} = w^2 + x^2 + y^2 + z^2$

That is, the product of any number of sums of four squares is also a sum of four squares.


Proof 1
Taking each of the squares on the right hand side and multiplying them out in turn:














\(\ds \paren {a w + b x + c y + d z}^2\)

\(=\)







\(\ds a^2 w^2 + b^2 x^2 + c^2 y^2 + d^2 z^2\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds 2 \paren {a b w x + a c w y + a d w z + b c x y + b d x z + c d y z}\)
























\(\ds \paren {a x - b w + c z - d y}^2\)

\(=\)







\(\ds a^2 x^2 + b^2 w^2 + c^2 z^2 + d^2 y^2\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds 2 \paren {-a b w x + a c x z - a d x y - b c w z + b d w y - c d y z}\)
























\(\ds \paren {a y - b z - c w + d x}^2\)

\(=\)







\(\ds a^2 y^2 + b^2 z^2 + c^2 w^2 + d^2 x^2\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds 2 \paren {-a b y z - a c w y + a d x y + b c w z - b d x z - c d w x}\)
























\(\ds \paren {a z + b y - c x - d w}^2\)

\(=\)







\(\ds a^2 z^2 + b^2 y^2 + c^2 x^2 + d^2 w^2\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds 2 \paren {a b y z - a c x z - a d w z - b c x y - b d w y + c d w x}\)










All the non-square terms cancel out with each other, leaving:














\(\ds \)

\(\)







\(\ds \paren {a w + b x + c y + d z}^2\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {a x - b w + c z - d y}^2\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {a y - b z - c w + d x}^2\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {a z + b y - c x - d w}^2\)




















\(\ds \)

\(=\)







\(\ds a^2 w^2 + b^2 x^2 + c^2 y^2 + d^2 z^2\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds a^2 x^2 + b^2 w^2 + c^2 z^2 + d^2 y^2\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds a^2 y^2 + b^2 z^2 + c^2 w^2 + d^2 x^2\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds a^2 z^2 + b^2 y^2 + c^2 x^2 + d^2 w^2\)




















\(\ds \)

\(=\)







\(\ds \paren {a^2 + b^2 + c^2 + d^2} \paren {w^2 + x^2 + y^2 + z^2}\)









$\blacksquare$


Proof 2
Let:

$\mathbf m = a \mathbf 1 + b \mathbf i + c \mathbf j + d \mathbf k$
$\mathbf n = -w \mathbf 1 + x \mathbf i + y \mathbf j + z \mathbf k$
be two quaternions.
Then:














\(\ds \size {\mathbf m} \size {\mathbf n}\)

\(=\)







\(\ds \size {\mathbf m \mathbf n}\)





Quaternion Modulus of Product of Quaternions








\(\ds \leadsto \ \ \)





\(\ds \paren {a^2 + b^2 + c^2 + d^2} \paren {\paren {-w}^2 + x^2 + y^2 + z^2}\)

\(=\)







\(\ds \size {\mathbf m \mathbf n}\)





Definition of Quaternion Modulus














\(\ds \)

\(=\)







\(\ds \paren {-a w - b x - c y - d z}^2\)





Definition of Quaternion Multiplication














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {a x - b w + c z - d y}^2\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {a y - b z - c w + d x}^2\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {a z + b y - c x - d w}^2\)














\(\ds \leadsto \ \ \)





\(\ds \paren {a^2 + b^2 + c^2 + d^2} \paren {w^2 + x^2 + y^2 + z^2}\)

\(=\)







\(\ds \paren {a w + b x + c y + d z}^2\)





simplifying














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {a x - b w + c z - d y}^2\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {a y - b z - c w + d x}^2\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {a z + b y - c x - d w}^2\)









$\blacksquare$





