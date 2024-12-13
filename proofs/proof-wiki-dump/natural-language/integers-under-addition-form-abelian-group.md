# 

Source: https://proofwiki.org/wiki/Integers_under_Addition_form_Abelian_Group


This page has been identified as a candidate for refactoring of medium complexity.In particular: Extract the steps into modular chunks that are analysed and proved in more detail -- this will improve the expositional quality of this section of the siteUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
The set of integers under addition $\struct {\Z, +}$ forms an abelian group.


Proof
From the definition of the integers, the algebraic structure $\struct {\Z, +}$ is an isomorphic copy of the inverse completion of $\struct {\N, +}$.
From Natural Numbers under Addition form Commutative Semigroup, $\struct {\N, +}$ is a commutative semigroup.
From Natural Number Addition is Cancellable all elements of $\struct {\N, +}$ are cancellable.
The result follows from Inverse Completion of Commutative Semigroup is Abelian Group.
Thus addition on $\Z$ is well-defined, closed, associative and commutative on $\Z$.
$\Box$

Let us define $\eqclass {\tuple {a, b} } \boxminus$ as in the formal definition of integers.
That is, $\eqclass {\tuple {a, b} } \boxminus$ is an equivalence class of ordered pairs of natural numbers under the congruence relation $\boxminus$.
$\boxminus$ is the congruence relation defined on $\N \times \N$ by:

$\tuple {x_1, y_1} \boxminus \tuple {x_2, y_2} \iff x_1 + y_2 = x_2 + y_1$

In order to streamline the notation, we will use $\eqclass {a, b} {}$ to mean $\eqclass {\tuple {a, b} } \boxminus$, as suggested.


Identity is Zero
From Construction of Inverse Completion: Identity of Quotient Structure, the identity of $\struct {\Z, +}$ is $\eqclass {c, c} {}$ for any $c \in \N$:










\(\ds \forall a, b, c \in \N: \, \)



\(\ds \)

\(\)







\(\ds \eqclass {a, b} {} + \eqclass {c, c} {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {a, b} {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {c, c} {} + \eqclass {a, b} {}\)









$\eqclass {c, c} {}$ is the equivalence class of pairs of elements $\N \times \N$ whose difference is zero.
Thus the identity of $\struct {\Z, +}$ is seen to be $0$.

Note that a perfectly good representative of $\eqclass {c, c} {}$ is $\eqclass {0, 0} {}$.
This usually keeps to a minimum the complexity of any arithmetic that is needed.
$\Box$


Construction of Inverses
From Construction of Inverse Completion: Invertible Elements in Quotient Structure, we see that every element of $\struct {\Z, +}$ has an inverse.
We can see that:










\(\ds \forall a, b \in \N: \, \)



\(\ds \eqclass {a, b} {} + \eqclass {b, a} {}\)

\(=\)







\(\ds \eqclass {a + b, b + a} {}\)




















\(\ds \)

\(=\)







\(\ds \eqclass {a + b, a + b} {}\)





Natural Number Addition is Commutative




The above construction is valid because $a$ and $b$ are both in $\N$ and hence cancellable.
From Construction of Inverse Completion: Identity of Quotient Structure, $\eqclass {a + b, a + b} {}$ is a member of the equivalence class which is the identity of $\struct {\Z, +}$.

Thus the inverse of $\eqclass {a, b} {}$ is $\eqclass {b, a} {}$.
$\blacksquare$


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 3$: Examples of Infinite Groups: $\text{(ii)}$
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 4.5$. Examples of groups: Example $80$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Example $7.1$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.3$: Example $1$
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): $\S 1$: Some examples of groups: Example $1.01$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Examples of Group Structure: $\S 32$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $4$: Mappings: Exercise $9$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 34$. Examples of groups: $(1)$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.2$: Groups; the axioms: Examples of groups $\text{(i)}$
1994: H.E. Rose: A Course in Number Theory (2nd ed.) ... (previous) ... (next): $1$ Divisibility: $1.1$ The Euclidean algorithm and unique factorization
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Abelian group
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): group
1999: J.C. Rosales and P.A. García-Sánchez: Finitely Generated Commutative Monoids ... (previous) ... (next): Chapter $1$: Basic Definitions and Results
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Abelian group
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): group
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 1.5$

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Compare with Additive Group of Integers is Countably Infinite Abelian Group and Definition:Additive Group of Integers, depending on whether the source specifically names this object or merely states its properties (or both) and whether infinitude is mentioned.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1992: William A. Adkins and Steven H. Weintraub: Algebra: An Approach via Module Theory ... (previous) ... (next): $\S 1.1$: Example $1$




