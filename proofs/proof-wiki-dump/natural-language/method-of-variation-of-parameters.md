# 

Source: https://proofwiki.org/wiki/Method_of_Variation_of_Parameters



Proof Technique
The method of variation of parameters is a technique for finding a particular solution to a nonhomogeneous linear second order ODE:

$(1): \quad y + \map P x y' + \map Q x y = \map R x$
provided that the general solution of the corresponding homogeneous linear second order ODE:

$(2): \quad y + \map P x y' + \map Q x y = 0$
is already known.


Method
Let the general solution of $(2)$ be:

$y = C_1 \map {y_1} x + C_2 \map {y_2} x$

Then a particular solution of $(1)$ is:

$\ds y = y_1 \int -\frac {\map {y_2} x \map R x} {\map W {y_1, y_2} } \rd x + y_2 \int \frac {\map {y_1} x \map R x} {\map W {y_1, y_2} } \rd x$
where $\map W {y_1, y_2}$ denotes the Wronskian of $\map {y_1} x$ and $\map {y_2} x$.


Proof
Let the general solution of $(2)$ be:

$(3): \quad y = C_1 \map {y_1} x + C_2 \map {y_2} x$
Let the arbitrary constants $C_1$ and $C_2$ be replaced by functions $\map {v_1} x$ and $\map {v_2} x$.
It is required that $v_1$ and $v_2$ be determined so as to make:

$(4): \quad y = \map {v_1} x \map {y_1} x + \map {v_2} x \map {y_2} x$
a particular solution of $(1)$.
Then:














\(\ds y'\)

\(=\)







\(\ds \paren {v_1 {y_1}' + {v_1}' y_1} + \paren {v_2 {y_2}' + {v_2}' y_2}\)





Product Rule for Derivatives




\(\text {(5)}: \quad\)









\(\ds \)

\(=\)







\(\ds \paren {v_1 {y_1}' + v_2 {y_2}'} + \paren { {v_1}' y_1 + {v_2}' y_2}\)










Suppose ${v_1}' y_1 + {v_2}' y_2$ were made to vanish:

$(6): \quad {v_1}' y_1 + {v_2}' y_2 = 0$

Then:




\(\text {(7)}: \quad\)









\(\ds y'\)

\(=\)







\(\ds v_1 {y_1}' + v_2 {y_2}'\)










\(\text {(8)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \paren {v_1 {y_1} + {v_1}' {y_1}'} + \paren {v_2 {y_2} + {v_2}' {y_2}'}\)





Product Rule for Derivatives




Hence:














\(\ds y + \map P x y' + \map Q x y\)

\(=\)







\(\ds \map R x\)





$(1):$ given








\(\ds \leadsto \ \ \)





\(\ds \paren {v_1 {y_1} + {v_1}' {y_1}'} + \paren {v_2 {y_2} + {v_2}' {y_2}'} + \map P x y' + \map Q x y\)

\(=\)







\(\ds \map R x\)





substituting from $(8)$








\(\ds \leadsto \ \ \)





\(\ds \paren {v_1 {y_1} + {v_1}' {y_1}'} + \paren {v_2 {y_2} + {v_2}' {y_2}'} + \map P x \paren {v_1 {y_1}' + v_2 {y_2}'} + \map Q x y\)

\(=\)







\(\ds \map R x\)





substituting from $(7)$








\(\ds \leadsto \ \ \)





\(\ds \paren {v_1 {y_1} + {v_1}' {y_1}'} + \paren {v_2 {y_2} + {v_2}' {y_2}'} + \map P x \paren {v_1 {y_1}' + v_2 {y_2}'} + \map Q x \paren {v_1 y_1 + v_2 y_2}\)

\(=\)







\(\ds \map R x\)





substituting from $(4)$




\(\text {(9)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds v_1 \paren { {y_1} + \map P x {y_1}' + \map Q x y_1} + v_2 \paren { {y_2} + \map P x {y_2}' + \map Q x y_2} + {v_1}' {y_1}' + {v_2}' {y_2}'\)

\(=\)







\(\ds \map R x\)





rearranging




Because $y_1$ and $y_2$ are both particular solutions of $(2)$:

${y_1} + \map P x {y_1}' + \map Q x y_1 = {y_2} + \map P x {y_2}' + \map Q x y_2 = 0$
and so from $(9)$:

$(10): \quad {v_1}' {y_1}' + {v_2}' {y_2}' = \map R x$

In summary:




\(\text {(6)}: \quad\)









\(\ds {v_1}' y_1 + {v_2}' y_2\)

\(=\)







\(\ds 0\)










\(\text {(10)}: \quad\)









\(\ds {v_1}' {y_1}' + {v_2}' {y_2}'\)

\(=\)







\(\ds \map R x\)














\(\ds \leadsto \ \ \)





\(\ds {v_1}'\)

\(=\)







\(\ds \frac {y_2 \map R x} {y_2 {y_1}' - y_1 {y_2}'}\)




















\(\ds {v_2}'\)

\(=\)







\(\ds \frac {y_1 \map R x} {y_1 {y_2}' - y_2 {y_1}'}\)










\(\text {(11)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds {v_1}'\)

\(=\)







\(\ds -\frac {y_2 \map R x} {\map W {y_1, y_2} }\)




















\(\ds {v_2}'\)

\(=\)







\(\ds \frac {y_1 \map R x} {\map W {y_1, y_2} }\)










We started with the assumption that:

$(3): \quad y = C_1 \map {y_1} x + C_2 \map {y_2} x$
and so $y_1$ and $y_2$ are linearly independent.
Thus by Zero Wronskian of Solutions of Homogeneous Linear Second Order ODE iff Linearly Dependent:

$\map W {y_1, y_2} \ne 0$
and so $(11)$ is defined.

Thus:














\(\ds v_1\)

\(=\)







\(\ds \int -\frac {y_2 \map R x} {\map W {y_1, y_2} } \rd x\)




















\(\ds v_2\)

\(=\)







\(\ds \int \frac {y_1 \map R x} {\map W {y_1, y_2} } \rd x\)










and so as required:

$\ds y = y_1 \int -\frac {\map {y_2} x \map R x} {\map W {y_1, y_2} } \rd x + y_2 \int \frac {\map {y_1} x \map R x} {\map W {y_1, y_2} } \rd x$
$\blacksquare$


Source of Name
The name method of variation of parameters derives from the method of operation: the parameters $C_1$ and $C_2$ are made to vary by replacing them with the functions $\map {v_1} x$ and $\map {v_2} x$.


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.19$: The Method of Variation of Parameters




