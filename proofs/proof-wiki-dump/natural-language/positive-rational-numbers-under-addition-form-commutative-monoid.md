# 

Source: https://proofwiki.org/wiki/Positive_Rational_Numbers_under_Addition_form_Commutative_Monoid

Theorem
Let $\Q_{\ge 0}$ denote the set of positive rational numbers.
The algebraic structure:

$\struct {\Q_{\ge 0}, +}$
forms a commutative monoid.


Proof
From Rational Numbers form Field, $\struct {\Q, +, \times}$ is a field.
Hence $\struct {\Q, +}$ is an abelian group.

From Positive Rational Numbers are Closed under Addition we have that $\struct {\Q_{\ge 0}, +}$ is closed.
Hence from Subsemigroup Closure Test, $\struct {\Q_{\ge 0}, +}$ is a subsemigroup of $\struct {\Q, +}$.

From Restriction of Commutative Operation is Commutative, $\struct {\Q_{\ge 0}, +}$ is a commutative semigroup.

We have that $0$ is the identity element of $\struct {\Q, +}$.
Hence from Identity of Subsemigroup of Group, $0$ is also the identity element of $\struct {\Q_{\ge 0}, +}$.

So $\struct {\Q_{\ge 0}, +}$ is a commutative monoid.
$\blacksquare$





