# 

Source: https://proofwiki.org/wiki/Locker_Problem/Proof_1

Problem
There is a school with $100$ students, and correspondingly $100$ lockers, all of which start off closed.
The first student opens every locker.
The second student closes every other locker, starting with the second.
The third student changes the state of every third locker, starting with the third.
That is, if the locker is open, he or she closes it, and if it is closed, he or she opens it.
This continues similarly until all $100$ students have passed along the lockers.
After the $100$th student has finished, which lockers are open and which are closed?


Proof
Lockers switch state when a student whose number is a factor of the locker's number makes a pass.
Because they start closed, only those lockers whose state has been switched an odd number of times will finish open.
By definition, any factor of a number $n$ has another (not necessarily distinct) matching factor such that the product of the two is $n$.
In most cases, these pairs of factor have distinct elements.
However, if the number in question is a square, then one of its pairs of factors is identical.
Indeed, both elements of the pair are the number's square root.
Thus:

square numbers will have their state switched an odd number of times, and will end up open
all other numbers will have their state switched an even number of times, and will end up closed.
$\blacksquare$





