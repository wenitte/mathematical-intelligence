# 

Source: https://proofwiki.org/wiki/Linearly_Independent_Solutions_to_1st_Order_Systems


This article is not under active maintenance.While the contents of this page could be useful, they are currently not being maintained.
The correctness, lay-out and usefulness of the article may be compromised, so use whatever you get from here with caution.To discuss this page in more detail, feel free to use the talk page.
Theorem
The 1st-order homogeneous linear system of differential equations $x' = A \left({t}\right) x$, expressed with the vectors $x', x: \R \to \R^n$ and the matrix function $A: \R \to M_{n \times n} \left({\R}\right)$, has $n$ linearly independent solutions, and if $ \phi_1 , \phi_2, \dots, \phi_n$ are $n$ linearly independent solutions, then $c_1 \phi_1 + c_2 \phi_2 + \cdots + c_n \phi_n$, where $c_i$ are constants, is a general solution.


Proof
Let $v_1, v_2, \dots, v_n$ be linearly independent vectors in $\R^n$, and let $\phi_i$ be solutions to the IVPs $x' = A \left({t}\right) x, \, x \left({t_0}\right) = v_i$ for $i = 1, 2, \dots, n$.
Suppose the solutions are not independent, i.e. $c_1 \phi_1 + c_2 \phi_2 + \cdots + c_n \phi_n = 0$ for some constants $c_i$ not all zero.
Then:

$c_1 \phi_1 \left({t_0}\right) + c_2 \phi_2 \left({t_0}\right) + \cdots c_n \phi_n \left({t_0}\right) = c_1 v_1 + c_2 v_2 + \cdots + c_n v_n = 0$
meaning the vectors $v_i$ are linearly dependent, a contradiction, so the solutions $\phi_i$ must be linearly independent.

By linearity of the system, every vector function of the form $ x = c_1 \phi_1 + \cdots + c_n \phi_n$ is a solution.

Let $z$ be an arbitrary solution of the system.
Since $\phi_i \left({t_0}\right)$ are linearly independent and count $n$ in number, they form a basis for $\R^n$, hence $z \left({t_0}\right)$ must be a linear combination of those solutions, and then by uniqueness of solutions $z$ is a linear combination of the vector functions $\phi_i$.
This proves this is a general solution.

$\blacksquare$





